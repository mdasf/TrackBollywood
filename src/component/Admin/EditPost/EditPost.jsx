import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../../firebase-config";
import { AdminContext } from "../../context/admin-context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./EditPost.css";

function EditPost({
  // postDetail = {
  //   title: "",
  //   summary: "",
  //   author: "",
  //   image: "",
  //   paragraph: [], // empty array, elements of the type {paraHeading, paraText}
  //   tags: [],
  // },
  pid,
  isEditing,
  showPreview,
  onSubmitPost,
  onUpdatePost,
}) {
  // const [ isEditing,setIsEditing ] = useState(false);

  const [imageFile, setImageFile] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const [form, setForm] = useState({
  //   title: "",
  //   summary: "",
  //   author: "",
  //   image: "",
  //   // paragraph: "",
  //   paragraph: [], // empty array, elements of the type {paraHeading, paraText}
  //   tags: [],
  // // });
  // {

  const [form, setForm] = useState({
    title: "",
    summary: "",
    author: "",
    image: "",
    paragraph: "",
    tags: [],
    // postId: "",
  });

  const checkFields = () => {
    const formData = Object.entries(form);
    console.log(formData);
    let errorMsg = "",
      errorFlag = false;
    formData.forEach((entry) => {
      const [key, value] = [...entry];
      if (value === "") {
        console.log(key);
        errorFlag = true;
        let t = key.charAt(0).toUpperCase() + key.slice(1);
        errorMsg = errorMsg.concat(t) + ", ";
      }
    });

    console.log(errorMsg);
    return errorFlag ? errorMsg.slice(0, -2) : false;
  };

  const updatePost = (e) => {
    e.preventDefault();

    const errorMsg = checkFields();
    // console.log(errorMsg);
    if (errorMsg) {
      toast.error(`Fill fields ${errorMsg} `, {
        position: toast.POSITION.TOP_LEFT,
        className: "toast-error",
      });
      return;
    }
    // return;

    onUpdatePost(
      {
        // pid: pid,
        title: form.title,
        summary: form.summary,
        author: form.author,
        paragraph: form.paragraph,
        tags: form.tags,
        // image: form.image,
        image: form.image,
        // pid: form.pid,
      },
      imageFile
    );
  };

  const submitPost = (e) => {
    e.preventDefault();
    const errorMsg = checkFields();
    if (errorMsg) {
      toast.error(`Fill fields ${errorMsg} `, {
        position: toast.POSITION.TOP_LEFT,
        className: "toast-error",
      });
      return "";
    }

    onSubmitPost(
      {
        title: form.title,
        summary: form.summary,
        author: form.author,
        paragraph: form.paragraph,
        tags: form.tags,
        // image: form.image,
        image: form.image,
      },
      imageFile
    );
  };

  // const showPreview = () => {
  //   onPreviewClick({ ...form }, imageFile);
  // };

  // useEffect(() => {
  //   // const formData = JSON.parse(window.localStorage.getItem("form"));
  //   const formData = { ...postDetail };
  //   // console.log(formData);
  //   if (formData) {
  //     const { title, summary, author, image, paragraph, tags, imageFile } = {
  //       ...formData,
  //     };
  //     // console.log(title, summary, author, image, paragraph);
  //     setForm(() => {
  //       return {
  //         title,
  //         summary,
  //         author,
  //         image,
  //         paragraph,
  //         tags,
  //       };
  //     });
  //     console.log(form);
  //   }
  // }, []);

  // let isEditing;
  // useEffect(() => {
  //   console.log("EditPost first useEffect");

  //   // if (localStorage.getItem("isEditing") == "true") {
  //   if (isEditing) {
  //     // isEditing = true;
  //     let storedData = JSON.parse(localStorage.getItem("form"));
  //     // storedData.paragraph = storedData.paragraph.map((para) => {
  //     //   if (para !== "") return para;
  //     // });
  //     console.log(storedData);

  //     if (storedData) {
  //       setForm(() => {
  //         return { ...storedData };
  //       });
  //     }
  //     console.log(form);
  //   }
  // }, [isEditing]);

  function isEmpty(value) {
    return value === undefined || value === null || value === "";
  }

  function hasEmptyProperties(obj) {
    for (const key in obj) {
      if (!isEmpty(obj[key])) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    console.log(pid, "running");

    if (pid) {
      const formData = JSON.parse(localStorage.getItem("form"));
      console.log("formData", formData);
      // const t =
      // console.log(t);
      if (!hasEmptyProperties(formData)) {
        setForm(() => {
          return {
            title: formData.title,
            author: formData.author,
            tags: formData.tags,
            summary: formData.summary,
            paragraph: formData.paragraph,
            image: formData.image,
            // postId: pid,
          };
        });
        console.log("form not emtpy", form);
      } else {
        console.log("funcion ran");
        setLoading(true);
        (async () => {
          const docSnap = await getDoc(doc(firestore, "posts", pid));
          console.log(docSnap.data());
          let data = { ...docSnap.data() };
          console.log(data.imageUrl);
          setForm(() => {
            return {
              title: data.title,
              author: data.author,
              tags: data.tags,
              summary: data.summary,
              paragraph: data.paragraph,
              image: data.imageUrl,
              // postId: pid,
            };
          });
          setLoading(false);
        })();
      }

      // }
      console.log(isEditing);
    }
  }, []);

  useEffect(() => {
    //check fields empty or not

    // console.log(form.image);
    // console.log(form.paragraph?.split("\n").map((para) => para));

    // const img = imageFile ? imageFile : form.imageUrl;

    showPreview({ ...form });
    // localStorage.setItem(
    //   "form",
    //   JSON.stringify({ title, summary, author, paragraph ,image,tags})
    // );
    console.log("showpreview ran");
    return () => {
      localStorage.removeItem("form");
    };
  }, [form]);

  return (
    <>
      <section className="section-new-post">
        {loading && <div className="loading-data">Loading Post Data..</div>}
        {!loading && (
          <>
            <div className="heading hasbefore">
              <p className="">New Article</p>
            </div>
            <div className="edit-post-container">
              <form className="new-post-form">
                <div className="input-group">
                  <label>Title</label>
                  <input
                    value={form.title || ""}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>Summary</label>
                  <input
                    value={form.summary || ""}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        summary: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="col-2">
                  <div className="input-group">
                    <label>Author</label>
                    <input
                      value={form.author || ""}
                      // value={"Asif"}
                      // disabled
                      onChange={(e) => {
                        setForm({
                          ...form,
                          author: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="input-group">
                    <label>Tags</label>
                    <input
                      value={form.tags.join(",") || ""}
                      // value={["entertainment", "movie"].join(",")}
                      // disabled
                      onChange={(e) => {
                        setForm({
                          ...form,
                          tags: e.target.value.split(","),
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Paragraph</label>
                  <textarea
                    rows={13}
                    value={form.paragraph || ""}
                    onChange={(e) => {
                      // onContentChange(e);
                      setForm({
                        ...form,
                        paragraph: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="btn-group ">
                  {/* <p
                className="btn btn-preview"
                onClick={() => {
                }}
              >
                Preview
              </p> */}
                  {
                    <button
                      className="btn btn-submit"
                      onClick={() => {
                        navigate("/admin/updatePosts");
                      }}
                    >
                      {/* {isEditing ? "Update" : "Submit"} */}
                      Cancel
                    </button>
                  }

                  <button
                    className="btn btn-submit"
                    onClick={isEditing ? updatePost : submitPost} //isEditing ? updatePost : submitPost
                  >
                    {/* {isEditing ? "Update" : "Submit"} */}
                    {isEditing ? "Update" : "Submit"}
                  </button>
                </div>

                <div className="img-upload">
                  <label htmlFor="upload">Upload Image</label>
                  <input
                    type="file"
                    id="upload"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        // image: e.target.files[0],
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                      setImageFile(e.target.files[0]);
                      // console.log(e.target.files[0]);
                    }}
                  />
                </div>
              </form>
            </div>
            <ToastContainer />
          </>
        )}
      </section>
    </>
  );
}

export default EditPost;
