$(document).ready(function() {
	
    var filerKit = $('#files-input').filer({
     	changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Drag all mesa log files here.</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="jFiler-input-choose-btn blue">Browse Files</a></div></div>',
     	theme: "dragdropbox",
     	showThumbs: true,
     	dragDrop: {
			dragEnter: null,
			dragLeave: null,
			drop: null,
			dragContainer: null,
		},

		afterShow: function(data, itemEl, listEl, boxEl, newInputEl, inputEl, id){
			// Build dict of key,value as integer,filenames.
			// 
			var filerKit = $("#files-input").prop("jFiler");
			Papa.parse(filerKit.files[0], {
				complete: function(results) {
					history_headers = results.data[5];
					console.log(history_headers);
				}
			});
			console.log("Showing properties of files_list[0].file")
			// for(var propName in filerKit.files_list[0]) {
			for(var propertyName in filerKit.files_list[0].file) {
				console.log(propertyName);
			}

			console.log("num of files is " + filerKit.files_list.length);
			console.log("name of file 0 is: " + filerKit.files_list[0].file.name);
			console.log("name of file 0 is: " + filerKit.files[0].name);
			// for(var propName in filerKit.files[0]) {
			// 	console.log(propName);
			// }


			var startint = parseInt(0);
			var stopint = parseInt(10);
			var theFile = filerKit.files[0];
			var theBlob = theFile.slice(startint,stopint);
			var reader = new FileReader();
			var texty = reader.readAsBinaryString(theBlob);
			reader.onloadend = function(evt) {
			      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
			        console.log(evt.target.result);
     		}
  		  };
			// console.log(filerKit.files_list[0].file.name);
			// console.log(filerKit.files_list[0]);
			console.log(texty);
	        // var filerKit = inputEl.prop("jFiler");
         //    filerKit.files_list[id].name = new_file_name;
        },
		templates: {
			box: '<div style="margin-bottom:1em; font-weight:600"><span>Files----></span><span style="margin-left:0em"><input type="submit" value="Process Data Files"></span></div>\
\
			<ul class="jFiler-items-list jFiler-items-grid" style="border-left: 2px solid rgba(255,255,255,.5); margin-left:-4px; padding-left:4px"></ul>',
			item: 	'<li><span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}} - </b></span><span class="jFiler-item-others">{{fi-size2}} - {{fi-progressBar}} - <a class="icon-jfi-trash jFiler-item-trash-action"></a></span></li>',
			itemAppend: '<li><span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}}</b></span></li>',
			progressBar: '<div class="bar"></div>',
			itemAppendToEnd: false,
			canvasImage: true,
			removeConfirmation: true,
			_selectors: {
				list: '.jFiler-items-list',
				item: '.jFiler-item',
				progressBar: '.bar',
				remove: '.jFiler-item-trash-action'
			}
		},
		dialogs: {
			alert: function(text) {
				return alert(text);
			},
			confirm: function (text, callback) {
				confirm(text) ? callback() : null;
			}
		},

		captions: {
			button: "Choose Files",
			feedback: "Choose files To Upload",
			feedback2: "files were chosen",
			drop: "Drop file here to Upload",
			removeConfirmation: "Are you sure you want to remove this file?",
			errors: {
				filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
				filesType: "Only Images are allowed to be uploaded.",
				filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
				filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
			}
		}		

     }


)

// var filerKit = $("#files-input").prop("jFiler");

// $("#files-input").on("change",function(){console.log('fired')});
// $("input[type=file]").on("change",function(){console.log('fired')});

// function readSingleFile() {
// 	var filerKit = $("#files-input").prop("jFiler");
// 	console.log(filerKit)
// 	// filerKit.files_list;
// };

// function readSingleFile() {
//     // var f = evt.target.files[0];   
//     var f = $("#input-files").get(0).files[0];   
//     if (f) {
//       var r = new FileReader();
//       r.onload = function(e) { 
//           var contents = e.target.result;             
//           var ct = r.result;
//           var words = ct.split(' ');            
//           alert(words[0]);
//       }
//       r.readAsText(f);
//     } else { 
//       alert("Failed to load file");
//     }
//   }

//   document.getElementById('files-input').addEventListener('change', readSingleFile, false);

});
// Can't get this working

// var inputElement = document.getElementById("files-input");
// inputElement.addEventListener("change", checkFiles, false);
// function checkFiles() {
//   	var fileList = this.files;	
// 	console.log("checkFiles fired")
// 	console.log(fileList)
//   // var fileList = this.files; /* now you can work with the file list */
// }