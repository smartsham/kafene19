
    let status = window.localStorage.getItem("loginStatus");
    function logOut() {
      window.localStorage.setItem("loginStatus", "false")
      window.location.href = "index.html";
    }

    const getUsers = () => {
      axios
        .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
        .then(function (response) {
          // handle success
          var mydatas = response.data;
          console.log(mydatas);

          // let resEle = document.querySelector(".result");
          // get the value of checkbox which are selected and stroed in array
          let checkboxArray = [];
          let finalData = [];
          let filtredData = [];
          document.getElementById("mytabledata").innerHTML = "";
          var cb = document.getElementsByName("orders");
          console.log("This is my",cb)
          var total = 0;
          for (var i = 0; i < cb.length; i++) {
            if (cb[i].checked) {
              checkboxArray.push(cb[i].value);
              console.log("This is CheckboxArray ",checkboxArray) //New / Packed / Intransition / Delivered
            }
     
          }

          // api data filter acc to checkbox
          filtredDataTotal = mydatas.filter((item) =>
            checkboxArray.includes(item.orderStatus)
          );
          console.log("This is Filtereddatatotal1", filtredDataTotal)
          var temp = " ";
          filtredDataTotal.forEach((itemData) => {
            temp += "<tr >";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.customerName + "</td>";
            temp += "<td>" + itemData.orderDate + "</td>";
            temp += "<td>" + itemData.amount + "</td>";
            temp += "<td>" + itemData.orderStatus + "</td></tr>";
          });
          document.getElementById("mytabledata").innerHTML = temp;

          total = filtredDataTotal.length;
          let mycount1 = document.getElementById("count");
          mycount1.innerHTML = `Count: ${total}`;

          console.log("This is a Count", filtredDataTotal);
        });
    };
    getUsers();
  