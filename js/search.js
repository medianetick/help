function search(){
   const searchinput =  document.getElementById("searchbox").value;
   window.location.assign("search=?"+searchinput)
}
