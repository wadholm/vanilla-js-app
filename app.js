const numbersList = document.getElementById("numbers-container");

async function fetchData() {
    const data = await (await fetch("http://numbersapi.com/1..51")
      ).json()
      takeData(data);
      return;
    }
    fetchData();

  function takeData(data) {
    const numbersFacts = Object.entries(data)
    renderData(numbersFacts);
  }

  function renderData(data) {
    // const list = [`<tr>
    //     <th>Number</th>
    //     <th>Fact</th>
    // </tr>`];

    // let list = data
    // .map(
    //   (index, fact) =>
    //     `<div class="number">
    //         <p>${index}</p>
    //     </div>`
    // )
    // .join(" ");
    let list = [];

    data.forEach(([key, value]) => {
        let elem = 
        `<div class="number-box">
        <div class="number-fact">
            <p>${value}</p>
        </div>
        <div class="number">
        ${key}
        </div>
        </div>
        `
        list.push(elem);
    })
    numbersList.innerHTML = list.join(" ");
  }

  fetchData();
