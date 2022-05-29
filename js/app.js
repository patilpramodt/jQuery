$(document).ready(function () {
  var cl = console.log;
  var titleTag = $("title").text();
  if (titleTag === "jQuery Task 1") {
    $(".btn").on("click", function () {
      event.preventDefault();
      let firstNo = parseFloat($(".firstNo").val());
      let secondNo = parseFloat($(".secondNo").val());
      let addition = firstNo + secondNo;
      let substraction = firstNo - secondNo;
      let multiplication = firstNo * secondNo;
      let dividation = firstNo / secondNo;
      cl(`Addition of ${firstNo} and ${secondNo} is ${addition}
  Substraction ${firstNo} and ${secondNo} in ${substraction}
  Multiplication of ${firstNo} and ${secondNo} is ${multiplication}
  Dividation ${firstNo} and ${secondNo} is ${dividation}`);
    });
  }
  if (titleTag === "jQuery Task 2") {
    $(".btnHigh").on("click", function () {
      let firstNo = parseFloat($(".firstNo").val());
      let secondNo = parseFloat($(".secondNo").val());
      // if (firstNo > secondNo) {
      //     cl(`Higher no is = ${firstNo}`)
      // } else if (firstNo < secondNo) {
      //     cl(`Higher no is = ${secondNo}`)
      // } else {
      //     cl(`${firstNo} and ${secondNo} are same`)
      // }
      let result = firstNo > secondNo ? firstNo : secondNo;
      cl(`Higher no is ${result}`);
    });
    $(".btnLow").on("click", function () {
      let firstNo = parseFloat($(".firstNo").val());
      let secondNo = parseFloat($(".secondNo").val());
      let result = firstNo < secondNo ? firstNo : secondNo;
      cl(`Lower no is ${result}`);
    });
  }
  if (titleTag === "jQuery Task 3") {
    $(".resultBtn").on("click", function () {
      let firstNo = parseFloat($(".firstNo").val());
      let secondNo = parseFloat($(".secondNo").val());
      let addition = firstNo + secondNo;
      let result = addition % 2 === 0 ? "Even" : "Odd";
      cl(
        `Addition of ${firstNo} and ${secondNo} is ${addition} and it is ${result}`
      );
    });
  }
  if (titleTag === "jQuery Task 4") {
    // $("input").on("blur", function (e) {
    //   let box = $(this);
    //   if (!$(this).val()) {
    //     setTimeout(() => {
    //       alert('"Textbox is empty"');
    //       box.focus();
    //     }, 1000);
    //   }
    // });

    $(document).on("blur", ".temp", function () {
      let box = $(this);
      if (!$(this).val()) {
        alert('"Textbox is empty"');
        setTimeout(function () {
          $(box).focus();
        }, 1);
      } else {
        box.removeClass("temp");
      }
    });
    $("input").on("focus", function () {
      let checkClass = $(".temp");
      cl(checkClass);
      if (checkClass.length === 0) {
        $(this).addClass("temp");
      }
    });
  }
  if (titleTag === "jQuery Task 5") {
    $(".triggerBtn").on("click", function () {
      let flag = true;
      $(".triggerBtn").trigger(".eventBtn");
      $(".eventBtn").on("click", function () {
        if (flag === true) {
          $(".img").hide();
          $(".eventBtn").val("Show Image");
          flag = false;
        } else {
          $(".img").show();
          $(".eventBtn").val("Hide Image");
          flag = true;
        }
      });
    });
  }
  if (titleTag === "jQuery Task 6") {
    let text = $(".textBox").text();
    let result = text;
    $(".eventBtn").on("click", function () {
      result += text;
      $(".textBox").text(result);
    });
  }
  if (titleTag === "jQuery Task 7") {
    let $text = `<span>${$(".text").text()}</span>`;
    let $result = $text;
    $(".addBtn").on("click", function () {
      $result = $result + $text;
      $(".text").html($result);
    });
    $(".deleteBtn").on("click", function () {
      $("p span:last").remove();
      $result = $(".text").text();
    });
  }
  if (titleTag === "jQuery Task 8") {
    function AutoNumber() {
      $("table tr").each(function (i) {
        $(this).find("span").text(i);
      });
    }
    AutoNumber();
    $(".addRow").on("click", function () {
      $(".dataTable > tbody:last-child").append(`<tr>
  						<td><span></span></td>
  						<td>Paul</td>
  						<td>Hudson</td>
  						<td>37</td>
  						<td class='text-center'><i class="far fa-trash-alt delRow"></i></td>
  					</tr>`);
      AutoNumber();
    });
    $("#tbody").on("click", ".delRow", function () {
      $(this).parents("tr").remove();
      AutoNumber();
    });
  }
  if (titleTag === "jQuery Task 9") {
    $("#main").on("click", function () {
      if ($("#main").prop("checked")) {
        $("tr td input").prop("checked", true);
      } else {
        $("tr td input").prop("checked", false);
      }
    });
    $("tr td input").on("change", function () {
      if (!$(this).prop("checked")) {
        $("#main").prop("checked", false);
      }
      if ($("input:checked").length + 1 === $("input").length) {
        $("#main").prop("checked", true);
      }
    });
  }
  if (titleTag === "jQuery Task 10") {
    $("tr td input").on("click", function () {
      if ($(this).prop("checked")) {
        $(this).parents("tr").css("backgroundColor", "lightgrey");
        $(this).parents("tr").find("td input").prop("disabled", false);
      }
      if (!$(this).prop("checked")) {
        $(this).parents("tr").css("backgroundColor", "#fff");
        $(this)
          .parents("tr")
          .find("td:last-child input")
          .prop("disabled", true);
      }
    });
  }

  if (titleTag === "jQuery Task 11") {
    $(document).on("mousemove", function (e) {
      $("#result").html(`<h5>Distance from left:${e.pageX}px</h5>
  			<h5>Distance from top:${e.pageY}px</h5>`);
    });
  }
  if (titleTag === "jQuery Task 12") {
    $("input").on("click", function () {
      if ($(this).attr("value") === "Blue - #337ab7") {
        $("body").css("backgroundColor", "#337ab7");
      } else if ($(this).attr("value") === "Orange - #d58512") {
        $("body").css("backgroundColor", "#d58512");
      } else {
        $("body").css("backgroundColor", "#5cb85c");
      }
    });
  }
  if (titleTag === "jQuery Task 13") {
    let $value = parseFloat($("h1").text());
    $("input").on("click", function () {
      if ($(this).attr("value") === "- Decrease") {
        $value -= 1;
        $("h1").text($value);
      } else {
        $value += 1;
        $("h1").text($value);
      }
      if ($("h1").text() == 0) {
        $(this).prop("disabled", true);
      } else {
        $(this).siblings().prop("disabled", false);
      }
      if ($("h1").text() == 100) {
        $(this).prop("disabled", true);
      } else {
        $(this).siblings().prop("disabled", false);
      }
    });
  }
  if (titleTag === "jQuery Task 14") {
    $("input").on("click", function () {
      if ($(this).prop("checked")) {
        $(".jumbotron").show();
      } else {
        $(".jumbotron").hide();
      }
    });
  }
  if (titleTag === "jQuery Task 15") {
    $("input").on("click", function () {
      if ($(this).prop("checked")) {
        $("form input").prop("disabled", true);
      } else {
        $("form input").prop("disabled", false);
      }
    });
  }
  if (titleTag === "jQuery Task 16") {
    $(".sect2,.sect3").hide();
    $("input").on("click", function () {
      let section = "." + $(this).val();
      $(section).slideToggle("slow").siblings().hide();
    });
  }
  if (titleTag === "jQuery Task 17") {
    $(".topLeft").on("click", function () {
      $(".box").css({
        top: 0,
        left: 0,
        right: "",
        bottom: "",
      });
    });
    $(".topRight").on("click", function () {
      $(".box").css({
        top: 0,
        right: 0,
        left: "",
        bottom: "",
      });
    });
    $(".bottomRight").on("click", function () {
      $(".box").css({
        bottom: 0,
        right: 0,
        left: "",
        top: "",
      });
    });
    $(".bottomLeft").on("click", function () {
      $(".box").css({
        bottom: 0,
        left: 0,
        top: "",
        right: "",
      });
    });
  }
  if (titleTag === "jQuery Task 18") {
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let today = new Date();
    $(".calculate").on("click", function () {
      let gateName = $(".getName").val();
      let getYear = $(".getYear").val();
      let getMonth = month.indexOf($(".getMonth").val());
      let getDay = $(".getDay").val();
      let DateToCal = new Date(getYear, getMonth, getDay);
      let age = dhm(today - DateToCal);
      function dhm(ms) {
        const year = Math.floor(ms / (365 * 24 * 60 * 60 * 1000));
        const yearsms = ms % (365 * 24 * 60 * 60 * 1000);
        const month = Math.floor(yearsms / (30.5 * 24 * 60 * 60 * 1000));
        const monthsms = ms % (30.5 * 24 * 60 * 60 * 1000);
        const days = Math.floor(monthsms / (24 * 60 * 60 * 1000));
        return `${year} years ${month} months and ${days} days`;
      }
      $(".result").html(`<h3>Age of ${gateName} is</h3>
  			<h1>${age}</h1>`);
    });
  }
  if (titleTag === "jQuery Task 19") {
    $("body").on("click", function () {
      $(".box").hide();
    });
    $(".box").on("click", function (event) {
      event.stopPropagation();
    });
  }
  if (titleTag === "jQuery Task 20") {
    cl(navigator.userAgent);
    $(".checkDevice").on("click", function () {
      var isiPhone = / iphone/i.test(navigator.userAgent.toLowerCase());
      var isAndroid = / Android/i.test(navigator.userAgent.toLowerCase());
      var isBlackberry = / blackberry/i.test(navigator.userAgent.toLowerCase());
      var isChrome = / chrome/i.test(navigator.userAgent.toLowerCase());
      var isMozilla = / firefox/i.test(navigator.userAgent.toLowerCase());
      if (isiPhone) {
        alert("You are Using iPhone");
      } else if (isAndroid) {
        alert("You are Using Android");
      } else if (isBlackberry) {
        alert("You are Using Blackberry");
      } else if (isChrome) {
        alert("You are Using chrome");
      } else if (isMozilla) {
        alert("You are Using Mozilla");
      }
    });
  }

  if (titleTag === "jQuery Task 21") {
    $("#address").on("click", function () {
      if ($(this).prop("checked")) {
        $(".billAddress").val($(".currAddress").val()).attr("disabled", true);
        $(".billZip").val($(".currZip").val()).attr("disabled", true);
        $(".billCity").val($(".currCity").val()).attr("disabled", true);
        $(".billState").val($(".currState").val()).attr("disabled", true);
      } else {
        $(".billAddress").attr("disabled", false);
        $(".billZip").attr("disabled", false);
        $(".billCity").attr("disabled", false);
        $(".billState").attr("disabled", false);
      }
    });
  }
  if (titleTag === "jQuery Task 22") {
    $("a").on("click", function () {
      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      }
      copyToClipboard("#copyText");
    });
  }
  if (titleTag === "jQuery Task 23") {
    $(window).on("beforeunload", function () {
      // alert("You will loose all unsaved data!!!");
      var c = confirm();
      if (c) {
        return true;
      } else return false;
    });
  }
  if (titleTag === "jQuery Task 24") {
    $("#table_id").DataTable({
      ajax: {
        url: "https://jsonplaceholder.typicode.com/posts",
        dataSrc: "",
      },
      columns: [{ data: "id" }, { data: "title" }, { data: "body" }],
    });
  }
  if (titleTag === "jQuery Task 25") {
    var lCount = 2;
    var rCount = 2;
    var slideCount = $(".jumbotron").length;
    var slideWidth = $(".jumbotron").width();
    var slideHeight = $(".jumbotron").height();
    var sliderUlWidth = slideCount * slideWidth;
    $(".wraper").css({
      width: slideWidth,
      height: slideHeight,
    });
    $("#slider").css({
      width: sliderUlWidth,
      marginLeft: -slideWidth,
    });
    function moveLeft() {
      $("#slider").animate(
        {
          left: +slideWidth,
        },
        300,
        function () {
          $(".jumbotron:last-child").prependTo("#slider");
          $("#slider").css("left", "");
        }
      );
    }
    function moveRight() {
      $("#slider").animate(
        {
          left: -slideWidth,
        },
        300,
        function () {
          $(".jumbotron:first-child").appendTo("#slider");
          $("#slider").css("left", "");
        }
      );
    }
    function disablBtn() {
      if (lCount === slideCount) {
        $(".pre").addClass("disabled-link");
      }
      if (rCount === slideCount) {
        $(".next").addClass("disabled-link");
      }
    }
    $(".pre").click(function () {
      $(".next").removeClass("disabled-link");
      moveLeft();
      lCount++;
      rCount--;
      cl(lCount, rCount, slideCount);
      disablBtn();
    });
    $(".next").click(function () {
      $(".pre").removeClass("disabled-link");
      moveRight();
      lCount--;
      rCount++;
      cl(lCount, rCount, slideCount);
      disablBtn();
    });
  }
  if (titleTag === "jQuery Task 27") {
    $("#menubar").hide();
    $("a").on("click", function () {
      $("#menubar").slideToggle();
    });
    $("body").on("click", function () {
      $("#menubar").slideUp();
    });
    $("#menubar").on("click", function (event) {
      event.stopPropagation();
    });
    $("a").on("click", function (event) {
      event.stopPropagation();
    });
    $(window).on("keydown", function (e) {
      if (e.key === "Escape") {
        $("#menubar").slideUp();
      }
    });
  }
  if (titleTag === "jQuery Task 28") {
    $(document).on("click", ".show", function () {
      let setWidth = $(this).attr("id");
      $(".panel").animate(
        {
          left: "+=300",
          width: setWidth,
        },
        700
      );
      $(".slider").animate(
        {
          left: "+=" + setWidth,
          width: setWidth,
        },
        700
      );
      $(this).removeClass("show").addClass("hide");
    });
    $(document).on("click", ".hide", function () {
      let setWidth = $(this).attr("id");
      $(".panel").animate(
        {
          left: "-=300",
          width: "200px",
        },
        700
      );
      $(".slider").animate(
        {
          left: "-=" + setWidth,
          width: "200px",
        },
        700
      );
      $(this).removeClass("hide").addClass("show");
    });
  }
  if (titleTag === "jQuery Task 30") {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [10, 10, 5, 82, 20, 30, 75],
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {},
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
  }
});
