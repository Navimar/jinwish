$(document).on('click', '.text', function () {
    onSelect($(this).val());
});
$(document).on('click', '.tag', function () {
    onTag($(this).text());
});
$(document).on('click', '.opn', function () {
    onOpn($(this).text());
});
$(document).on('click', '.newtask', function () {
    onNew();
});
$(document).on('click', '.delete', function () {
    onDel($(this).attr('value'));
});
$(document).on('click', '#plustoday', function () {
    onToday();
});
$(document).on('click', '#plusday', function () {
    onPlusday();
});
$(document).on('click', '#plushour', function () {
    onPlusHour();
});
$(document).on('click', '#plusnow', function () {
    onNow();
});
$(document).on('click', '#plus15', function () {
    onPlus15();
});
$(document).on('click', '#plusweek', function () {
    onPlusWeek();
});

let render = () => {
    let lastheight = $('#taskheader').height();
    let tasks = $('#tasks');
    let tags = [];
    let opns = [];
    let tagtext = "";
    let opntext = "";
    let text = "";
    let note = "";
    let checked = false;
    // let fear = false;
    let button = true;
    let time = "00:00";
    let date = "1111-11-11";
    let today = new Date().getDate();
    let blocked = true;;
    let texthtml = "";
    tasks.html("");
    for (let a of data.tasks) {
      texthtml = "";
      if (today <= new Date(a.date).getDate() && new Date() < new Date(a.date)) {
        tasks.append("<div class='date'>Сегодня " + new Date(a.date).getDate() + "</div>");
        today = new Date(a.date).getDate() + 1;
      }
      if (a.blocked && blocked) {
        tasks.append("<div class='date'>Блокированные</div>");
        blocked = false;
      }
      texthtml += "<div class='task";
      if (a.selected) {
        texthtml += " selected";
        tags = a.tags;
        opns = a.opns;
        text = a.name;
        note = a.note;
        checked = a.ready;
        fear = a.fear;
        $("#priority").val("white");
        if (a.priority == "steel") {
          $("#priority").val("steel");
        }
        if (a.priority == "red") {
          $("#priority").val("red");
        }
        if (a.priority == "purple") {
          $("#priority").val("purple");
        }
        if (a.priority == "yellow") {
          $("#priority").val("yellow");
        }
        if (a.priority == "grey") {
          $("#priority").val("grey");
        }
        if (a.priority == "blue") {
          $("#priority").val("blue");
        }
        if (a.priority == "cyan") {
          $("#priority").val("cyan");
        }
        if (a.priority == "green") {
          $("#priority").val("green");
        }
        if (a.priority == "white") {
          $("#priority").val("white");
        }
        time = a.time;
        date = a.date;
      }
      if (a.ready) {
        texthtml += " ready";
      }
      if (a.fear) {
        texthtml += " old";
      }
      texthtml += " " + a.priority;
      texthtml += "'>";
      // texthtml += "<button class='delete' value='" + a.name + "'>del</button>";
      texthtml += "<button class='text";
      if (a.blocked) {
        texthtml += " cantdo";
      } else if (!isReady(a.date, a.time)) {
        texthtml += " cantdo"
      }
      texthtml += "' ";
      texthtml += "value='" + a.name + "'>";
      texthtml += a.name.split('\n')[0];
      if (a.name == 'new item') {
        button = false;
      }
      texthtml += "</button>";
      if (a.tags.length > 0 || a.opns.length > 0) {
        texthtml += "<br>";
      }
      if (a.tags.length > 0) {
        for (let t of a.tags) {
          texthtml += "<span class='tag";
          texthtml += "'>";
          texthtml += t;
          texthtml += "</span>&nbsp;";
        }
      }
      if (a.tags.length > 0 || a.opns.length > 0) {
        texthtml += "<span class='arr'>=&#62; </span>"
      }
      if (a.opns) {
        if (a.opns.length > 0) {
          // texthtml += "<div class='opns'>";
          for (let t of a.opns) {
            texthtml += "<span class='opn";
            texthtml += "'>";
            texthtml += t;
            texthtml += "</span>&nbsp;";
          }
          // texthtml += "</div>";
        }
      } else {
        a.opns = [];
      }
  
      texthtml += "</div>";
      tasks.append(texthtml);
      if (a.selected) {
        texthtml = "<div id='taskheader' class='list'>" + texthtml + "<br></div>";
        tasks.prepend(texthtml);
      }
    }
    if (button) {
      $('#taskheader').prepend("<div class='task newtask'>\n" +
        "<div class='text'>...new item</div>\n" +
        "</div>\n");
    }
    tasks.css('padding-top', $('#taskheader').height() + 10);
    let ysc = $(window).scrollTop();  //your current y position on the page
    let th = $('#taskheader').height();
    if (!th) th = 0;
    $(window).scrollTop(ysc + th - lastheight);
    // console.log('scroll',ysc,th,lastheight);
    for (let t of tags) {
      tagtext += t + "\n";
    }
    if (opns) {
      for (let t of opns) {
        opntext += t + "\n";
      }
    }
  
    $("input[type='checkbox']").prop({
      checked: checked
    });
    // $("#fear").prop({
    //   checked: fear
    // });
    $('.inputtags').val(tagtext);
    $('.inputopns').val(opntext);
    $('.inputtext').val(text + '\n' + note);
    $('#time').val(time);
    // console.log(date);
    $('#date').val(date);
    $('.delete').val(text);
    // localStorage.setItem('data', JSON.stringify(data));
    if (data) {
      send(data);
    }
    $('.clock').html(clock().text);
  };