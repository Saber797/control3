

let courses = [
  {
    title: "SMM",
    howLong: 3,
  },
  {
    title: "Dev",
    howLong: 6,
  },
  {
    title: "Graph",
    howLong: 4,
  },
];
let earnings = {
  total: 0,
  max: {},
  min: {},
};

let m = Number;
let w = Number;
let average_age = Number;
let smm = Number;
let dev = Number;
let graph = Number;
let students = [
  {
    gender: "m",
    age: 14,
    payment: 1220000,
    course: {
      title: "SMM",
    },
  },
  {
    gender: "m",
    age: 24,
    payment: 1883000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 16,
    payment: 2190000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "m",
    age: 19,
    payment: 718000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 15,
    payment: 2195000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "m",
    age: 24,
    payment: 460000,
    course: {
      title: "SMM",
    },
  },
  {
    gender: "w",
    age: 14,
    payment: 560000,
    course: {
      title: "SMM",
    },
  },
  {
    gender: "w",
    age: 22,
    payment: 160000,
    course: {
      title: "Dev",
    },
  },

  {
    gender: "m",
    age: 26,
    payment: 883000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 26,
    payment: 750000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "m",
    age: 23,
    payment: 212000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 24,
    payment: 883000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 27,
    payment: 190000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "w",
    age: 19,
    payment: 210000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 21,
    payment: 770000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "m",
    age: 18,
    payment: 1200000,
    course: {
      title: "SMM",
    },
  },
  {
    gender: "w",
    age: 51,
    payment: 880000,
    course: {
      title: "SMM",
    },
  },
  {
    gender: "m",
    age: 51,
    payment: 2430000,
    course: {
      title: "Dev",
    },
  },
  {
    gender: "w",
    age: 33,
    payment: 1277000,
    course: {
      title: "Graph",
    },
  },
  {
    gender: "w",
    age: 21,
    payment: 2750000,
    course: {
      title: "Dev",
    },
  },
];

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

// 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

// 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

// 3. Сохранить заработок учебного центра в earning.total*

// 4. Узнать кто больше всех платит за обучение в earning.max*

// 5. Узнать кто меньше всех платит за обучение в earning.min*

// 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

// 7. Посчитать средний возраст студентов в average_age*

const setup = () => {
  for (let item of students) {
    for (let item2 of courses) {
      if (item.course.title == item2.title) {
        item.course.howLong = item2.howLong
      }
    }
    console.log(item);
  }
m = students.filter(item => item.gender == 'm').length
console.log(m);
w = students.filter(item => item.gender == 'w').length
console.log(w);
earnings.total = students.reduce((a ,b) => a + b.payment,0)
console.log(earnings.total);
earnings.max = students.reduce((a ,b) => a.payment > b.payment ? a : b)
console.log(earnings.max);
earnings.min = students.reduce((a ,b) => a.payment < b.payment ? a : b)
console.log(earnings.min);
smm = students.filter(item => item.course.title == 'SMM').length
console.log(smm);
dev = students.filter(item => item.course.title == 'Dev').length
console.log(dev);
graph = students.filter(item => item.course.title == 'Graph').length
console.log(graph);
average_age = students.reduce((a ,b) => a + b.age,0)/students.length
console.log(average_age);
}

setup();
































