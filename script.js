const blindBoxes = {
  心动盲盒: {
    items: {
      浪漫城堡: [0.04, 0.06, 0.08, 0.12, 0.16, 0.2],
      龙吟法杖: [0.08, 0.07, 0.06, 0.04, 0.01, 0.001],
      时空之站: [0.12, 0.1, 0.09, 0.06, 0.02, 0.001],
      绮彩权杖: [3.7, 3.2, 2.7, 1.46, 0.03, 0.001],
      爱心抱枕: [49.0, 51.08, 52.09, 49.18, 48.03, 45.65],
      棉花糖: [42.0, 40.35, 39.74, 43.39, 45.36, 43.96],
      电影票: [5.06, 5.14, 5.24, 5.75, 6.39, 10.187],
    },
    itemValues: {
      浪漫城堡: 22330,
      龙吟法杖: 2000,
      时空之站: 1000,
      绮彩权杖: 400,
      爱心抱枕: 160,
      棉花糖: 90,
      电影票: 20,
    },
    itemGiftId: {
      浪漫城堡: 22330,
      龙吟法杖: 2000,
      时空之站: 1000,
      绮彩权杖: 400,
      爱心抱枕: 160,
      棉花糖: 90,
      电影票: 20,
    },
    itemCost: 150,
    drawCounts: [1, 10, 50],
    multipliers: [1, 1.5, 2, 3, 4, 5],
  },
  星月盲盒: {
    items: {
      落樱缤纷: [0.25],
      星河入梦: [2],
      冲鸭: [10.3],
      少女祈祷: [20.0],
      情书: [23.15],
      星与月: [24.3],
      小蛋糕: [20],
    },
    itemValues: {
      落樱缤纷: 600,
      星河入梦: 199,
      冲鸭: 99,
      少女祈祷: 66,
      情书: 52,
      星与月: 25,
      小蛋糕: 15,
    },
    itemCost: 50,
    drawCounts: [1, 10, 50],
    multipliers: [1],
  },
  闪耀盲盒: {
    items: {
      幻影飞船: [0.1, 0.2],
      龙运亨通: [0.16, 0.34],
      龙吟法杖: [0.28, 0.62],
      时空之站: [3.4, 2.5],
      机械幻想: [50.1, 50],
      旅行日记: [36, 40.3],
      璀璨钻石: [9.96, 6.04],
    },
    itemValues: {
      幻影飞船: 30000,
      龙运亨通: 5000,
      龙吟法杖: 2000,
      时空之站: 1000,
      机械幻想: 510,
      旅行日记: 300,
      璀璨钻石: 200,
    },
    itemCost: 500,
    drawCounts: [1, 10, 50],
    multipliers: [1, 2],
  },
  至尊盲盒: {
    items: {
      奇幻之城: [0.24, 0.48],
      龙运亨通: [0.32, 0.26],
      龙吟法杖: [1.45, 1.45],
      星际启航: [40.14, 42.99],
      许愿精灵: [35, 34],
      绮彩权杖: [22.75, 17.6],
      璀璨钻石: [0.1, 3.22],
    },
    itemValues: {
      奇幻之城: 32000,
      龙运亨通: 5000,
      龙吟法杖: 2000,
      星际启航: 1010,
      许愿精灵: 888,
      绮彩权杖: 400,
      璀璨钻石: 200,
    },
    itemCost: 1000,
    drawCounts: [1, 10, 50],
    multipliers: [1, 2],
  },
  奇遇盲盒: {
    items: {
      奇幻古堡: [0.1],
      星愿飞船: [0.1],
      奇遇巴士: [1.3],
      梦幻花车: [4],
      许愿神灯: [49],
      精灵兔: [41.67],
      魔力球: [5],
    },
    itemValues: {
      奇幻古堡: 28880,
      星愿飞船: 8000,
      奇遇巴士: 2000,
      梦幻花车: 1000,
      许愿神灯: 400,
      精灵兔: 100,
      魔力球: 50,
    },
    itemCost: 500,
    itemCost: 330,
    drawCounts: [1, 10, 50, 100],
    multipliers: [1],
  },
  大航海盲盒: {
    items: {
      总督3天: [0.1],
      提督8天: [0.4],
      提督3天: [0.45],
      舰长15天: [16],
      舰长8天: [53],
      舰长5天: [25],
      舰长3天: [5],
    },
    itemValues: {
      总督3天: 500,
      提督8天: 500,
      提督3天: 500,
      舰长15天: 500,
      舰长8天: 500,
      舰长5天: 500,
      舰长3天: 500,
    },
    itemCost: 500,
    drawCounts: [1],
    multipliers: [1],
  },
  音符盲盒: {
    items: {
      歌王在世: [0.25],
      星辰闪烁: [2],
      麦克风: [10.3],
      咏唱提琴: [20],
      节奏鼓点: [24.3],
      律动音阶: [23.15],
      心动音符: [20],
    },
    itemValues: {
      歌王在世: 600,
      星辰闪烁: 190,
      麦克风: 110,
      咏唱提琴: 66,
      节奏鼓点: 25,
      律动音阶: 52,
      心动音符: 12,
    },
    itemCost: 50,
    drawCounts: [1, 10, 50, 100],
    multipliers: [1],
  },
};

let drawRecords = {};
let totalDrawCount = 0;
let totalProfit = 0;
let totalSpent = 0;

function generateDrawCountOptions() {
  const boxType = document.getElementById("boxType").value;
  const blindBox = blindBoxes[boxType];
  const drawCountSelect = document.getElementById("drawCount");
  drawCountSelect.innerHTML = "";
  for (const drawCount of blindBox.drawCounts) {
    const option = document.createElement("option");
    option.value = drawCount;
    option.text = `${drawCount} 连抽`;
    drawCountSelect.appendChild(option);
  }
}

function generateMultiplierSelectOptions() {
  const boxType = document.getElementById("boxType").value;
  const blindBox = blindBoxes[boxType];
  const multiplierSelect = document.getElementById("multiplier");
  multiplierSelect.innerHTML = "";
  for (const multiplier of blindBox.multipliers) {
    const option = document.createElement("option");
    option.value = multiplier;
    option.text = `${multiplier} 倍`;
    multiplierSelect.appendChild(option);
  }
}

function clearRecords() {
  drawRecords = {};
  totalDrawCount = 0;
  totalProfit = 0;
  totalSpent = 0;
  document.getElementById("drawRecords").innerHTML = "";
  document.getElementById("totalDrawCount").innerHTML = 0;
  document.getElementById("totalProfit").innerHTML = 0;
  document.getElementById("totalSpent").innerHTML = 0;
  document.getElementById("profitOrLoss").innerHTML = 0;
}

function drawCards() {
  const boxType = document.getElementById("boxType").value;
  const blindBox = blindBoxes[boxType];
  const drawCount = parseInt(document.getElementById("drawCount").value);
  const multiplier = parseFloat(document.getElementById("multiplier").value);
  const records = [];

  for (let i = 0; i < drawCount; i++) {
    const randomNumber = Math.random();
    let cumulativeProbability = 0;

    for (const item in blindBox.items) {
      const probabilities = blindBox.items[item];
      const index = Math.min(
        Math.floor((multiplier - 1) / 0.5),
        probabilities.length - 1
      );
      const probability = probabilities[index] / 100;

      cumulativeProbability += probability;

      if (randomNumber < cumulativeProbability) {
        records.push(item);
        if (drawRecords[item]) {
          drawRecords[item]++;
        } else {
          drawRecords[item] = 1;
        }
        totalProfit += blindBox.itemValues[item];
        break;
      }
    }
  }
  const recordText = Object.entries(drawRecords)
    .map(([item, count]) => `${item}: ${count}`)
    .join("<br>");
  document.getElementById(
    "drawRecords"
  ).innerHTML = `<p>本次抽取记录: ${records.join(
    ", "
  )}<br>总抽取记录:<br>${recordText}</p>`;
  totalDrawCount += drawCount;
  document.getElementById("totalDrawCount").innerHTML = totalDrawCount;
  totalSpent += drawCount * blindBox.itemCost;
  document.getElementById("totalSpent").innerHTML = totalSpent;
  document.getElementById("totalProfit").innerHTML = totalProfit;

  const profitOrLoss = totalProfit - totalSpent;
  document.getElementById("profitOrLoss").innerHTML = profitOrLoss;
}

// 在页面加载时生成初始的抽卡次数和倍率选项
generateDrawCountOptions();
generateMultiplierSelectOptions();
renderGiftList();

document.getElementById("boxType").addEventListener("change", () => {
  generateDrawCountOptions();
  generateMultiplierSelectOptions();
  renderGiftList();
});

function renderGiftList() {
  const boxType = document.getElementById("boxType").value;
  const multiplier = parseFloat(document.getElementById("multiplier").value);
  const giftListContainer = document.getElementById("giftList");
  const probabilities = blindBoxes[boxType].items;
  giftListContainer.innerHTML = "";
  // 渲染每个礼物的的信息
  for (const [itemName, chances] of Object.entries(probabilities)) {
    const index = Math.min(
      Math.floor((multiplier - 1) / 0.5),
      chances.length - 1
    );
    const probability = chances[index];
    let giftHTML;
    // 创建礼物的HTML结构
    if (boxType !== "大航海盲盒") {
      giftHTML = `
      <div class="gift-item">
        <img src="./images/${itemName.replace(
          / /g,
          ""
        )}.webp" alt="${itemName}" />
        <div class="gift-info">
          <h3>${itemName}</h3>
          <p>抽中概率: ${probability}%</p>
        </div>
      </div>
    `;
    } else {
      giftHTML = `
      <div class="gift-item">
        <img src="./images/${itemName.slice(0, 2)}.png" alt="${itemName}" />
        <div class="gift-info">
          <h3>${itemName}</h3>
          <p>抽中概率: ${probability}%</p>
        </div>
      </div>
    `;
    }
    giftListContainer.innerHTML += giftHTML;
  }
}
