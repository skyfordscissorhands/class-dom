var books = [
    {
      title: 'Daisy Jones & The Six',
      author: 'Talor Jenkins Reid',
      alreadyRead: true
    }, {
      title: 'Hollywood Park',
      author: 'Mikel Jollett',
      alreadyRead: true
    }
  ];
  var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow";