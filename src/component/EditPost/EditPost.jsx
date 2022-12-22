import React, { useEffect, useState } from "react";

import "./EditPost.css";

function EditPost({ paragraphCount, onPreviewClick, onSubmitPost }) {
  // const [paragraphCount, setparagraphCount] = useState(count);

  const [isPreviewButtonClicked, setIsPreviewButtonClicked] = useState(false);
  const [imageFile, setImageFile] = useState("");

  const [form, setForm] = useState({
    title: "",
    summary: "",
    author: "",
    image: "",
    // paragraph: "",
    paragraph: [], // empty array, elements of the type {paraHeading, paraText}
    // tags: [],
  });

  const submitPost = (e) => {
    e.preventDefault();
    // setIsPreviewButtonClicked(true);
    onSubmitPost(form);
  };

  const showPreview = () => {
    onPreviewClick(form);
  };

  useEffect(() => {
    // setForm(JSON.parse(window.localStorage.getItem("form")));
    // console.log(JSON.parse(window.localStorage.getItem("form")));
    const { title, summary, author, image, paragraph } = JSON.parse(
      window.localStorage.getItem("form")
    );
    setForm(() => {
      return {
        title: title,
        summary: summary,
        author: author,
        image: image,
        paragraph: paragraph,
      };
    });
    console.log(form);
  }, []);

  https: useEffect(() => {
    //check fields empty or not

    showPreview();
    window.localStorage.setItem("form", JSON.stringify({ ...form }));
  }, [form]); //form.paragraph, form.title, form.summary, form.author

  const onContentChange = (event) => {
    // console.log(event);

    const text = event.target.value.split("\n");

    let newparagraph = text;

    setForm({
      ...form,
      paragraph: newparagraph,
    });
  };

  return (
    <section className="section-new-post">
      <div className="heading hasbefore">
        <p className="">New Article</p>
      </div>
      <div className="edit-post-container">
        <form onSubmit={submitPost} className="new-post-form">
          <div className="input-group">
            <label>Title</label>
            <input
              value={form.title}
              onChange={(e) => {
                setForm({
                  ...form,
                  title: e.target.value,
                });
                setIsPreviewButtonClicked(false);
              }}
            />
          </div>
          <div className="input-group">
            <label>Summary</label>
            <input
              value={form?.summary}
              onChange={(e) => {
                setForm({
                  ...form,
                  summary: e.target.value,
                });
                setIsPreviewButtonClicked(false);
              }}
            />
          </div>

          <div className="col-2">
            <div className="input-group">
              <label>Author</label>
              <input
                value={form?.author}
                onChange={(e) => {
                  setForm({
                    ...form,
                    author: e.target.value,
                  });
                  setIsPreviewButtonClicked(false);
                }}
              />
            </div>

            <div className="input-group">
              <label>Tags</label>
              <input
              // value={form?.author}
              // onChange={(e) => {
              //   setForm({
              //     ...form,
              //     author: e.target.value,
              //   });
              //   setIsPreviewButtonClicked(false);
              // }}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Paragraph</label>
            <textarea
              rows={10}
              value={form.paragraph.join("\n")}
              onChange={(e) => {
                // console.log(e);
                onContentChange(e);
                setIsPreviewButtonClicked(false);
              }}
              // onKeyPress={(e) => {
              //   e.code == "Enter" ? onEnterKeyPress(e) : "";
              //   console.log(form?.paragraph);
              // }}
            />
          </div>
          <div className="btn-group ">
            {/* <p
                className="btn btn-preview"
                onClick={() => {
                  setIsPreviewButtonClicked(true);
                }}
              >
                Preview
              </p> */}
            <button
              className="btn btn-submit"
              // onClick={() => {
              //   // submit(true);
              // }}
            >
              Submit
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
                // setImageFile(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditPost;
