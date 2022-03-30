import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class RichText extends React.Component {

    constructor(props) {
        super(props);
        this.state = { content: "" };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(content, editor) {
        this.setState({content});
      }
    
      handleSubmit(event) {
        alert("Text was submitted: " + this.state.content);
        event.preventDefault();
      }
    

  render() {
    return (
        <form onSubmit={this.handleSubmit}>

        <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange="" />
      <Editor
        initialValue="<p>Welcome! </p>"
        init={{
          height: 500,
          menubar: 'table',
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'lists code emoticons',
            'image code',
            'table',
            'bbcode',
          ],
          bbcode_dialect: 'punbb',
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help|emoticons|link image table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
            content_css: '//www.tinymce.com/css/codepen.min.css',
            file_browser_callback_types: 'image',
            file_picker_callback: function (callback, value, meta) {
              if (meta.filetype == 'image') {
                  var input = document.getElementById('my-file');
                  input.click();
                  input.onchange = function () {
                      var file = input.files[0];
                      var reader = new FileReader();
                      reader.onload = function (e) {
                          console.log('name',e.target.result);
                          callback(e.target.result, {
                              alt: file.name
                          });
                      };
                      reader.readAsDataURL(file);
                  };
              }
          },
            paste_data_images: true,
         
        }}
        onEditorChange={this.handleChange}
      />
         <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RichText;