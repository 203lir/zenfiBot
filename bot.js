const { Client, MessageAttachment } = require('discord.js');

const client = new Client();

const Discord = require('discord.js');

const cheerio = require('cheerio');
const request = require('request');

var fs = require('fs')
var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence({ activity: { name: 'Ballade No. 1 in G minor, Op. 23' }, status: 'online' });
});

const zenfiEmbed = {
  title: 'Zenfi Commands',
  description: commandsList,
  timestamp: new Date(),
};

const rateEmbed = {
    timestamp: new Date(),
};


client.on('message', message => {


  if (message.content === '.commands') {
  	zenfiEmbed.color = 'BC67D0';
    	message.channel.send({embed: zenfiEmbed})
  }


  if (message.content === '.yum') {
    image(message)
    console.log(message.member.id)
  }
  if (message.content === '.vegan') {
    vimage(message)
  }

  if (message.content === '.pizza') {
    pimage(message)
  }

  if (message.content === '.meat') {
    mimage(message)
  }

  if (message.content === '.dessert') {
    dimage(message)
  }

  if (message.content === '.anime') {
    anime(message)
  }

  if (message.content === '.stonks') {
    message.react('✅');
    message.react('😐');
    message.react('❌');

  }

  if (message.content === '.skip') {
    message.react('✅');
    message.react('❌');
  }

  if (message.content === '.status') {
    message.channel.send("STATUS: Why are you asking for my status?")
  }

  var l = message.content.length;
  if (message.content[0] === '.') {
          var tt = message.content.indexOf('<@!')
          var stt = message.content.slice(t, t+22)
          if (message.content.slice(tt-5, tt-1) === 'rate') {
              if (message.content.includes('<@!')) {
              var t = message.content.indexOf('<@!')
              var st = message.content.slice(t, t+22)
              rateEmbed.title = message.content.slice(1,t-5) + " rate"
              rateEmbed.color = 'FF2BDF';
              rateEmbed.description = st + " is " + Math.floor(Math.random() * (101)).toString() + "% " + message.content.slice(1,t-5);
              message.channel.send({embed: rateEmbed})

          }
          }
          else if (message.content.slice(l-4, l) === 'rate') {
          rateEmbed.title = message.content.slice(1,l-4) + " rate"
          rateEmbed.color = 'FF2BDF';
          rateEmbed.description = `${message.author}` + " is " + Math.floor(Math.random() * (101)).toString() + "% " + message.content.slice(1,l-4);
          message.channel.send({embed: rateEmbed})
          }
          else if (message.content.slice(1, 4) === 'how') {
              if (message.content.includes('<@!')) {
                  var t = message.content.indexOf('<@!')
                  var st = message.content.slice(t, t+22)
                  rateEmbed.title = message.content.slice(4,t-1) + " rate"
                  rateEmbed.color = 'FF2BDF';
                  rateEmbed.description = st + " is " + Math.floor(Math.random() * (101)).toString() + "% " + message.content.slice(4,t-1);
                  message.channel.send({embed: rateEmbed})
          } else {
              rateEmbed.title = message.content.slice(4, l) + " rate"
              rateEmbed.color = 'FF2BDF';
              rateEmbed.description = `${message.author}` + " is " + Math.floor(Math.random() * (101)).toString() + "% " + message.content.slice(4, l);
              message.channel.send({embed: rateEmbed})
          }
          }

   }

});

function image(message){

  var terms = ["jajangmyeon", "chinese hand pulled noodles", "udon", "japanese bento box", "vietnamese food", "eggroles", "curry food", "rice dish", "boba milk tea", "egg tarts", "octopus asian dish", "asian rice", "ramen", "pho", "dumplings", "sushi", "japchae", "bibimbap", "chinese food", "japanese cheesecake", "bao food", "tempura", "tempura soup", "tempura food", "onigiri", "chinese pancake", "korean bbq", "bulgolgi", "best asian street food", "asian sandwich", "boba guys la", "la street asian food", "nyc asian food", "china town food", "best dim sum", "ramen soup", "Szechwan cuisine", "Sichuan cuisine", "double cooked pork belly", "Chinese flounder fish dish", "asian food", "Cantonese cuisine", "hot pot", "jasmine rice dish", "papaya salad vietnamese", "hand pulled noodles", "best tempura japan", "Spicy Chinese Eggplant with Szechuan Sauce", "home made dumplings", "asian soup", "asian snacks", "asian candy", "Korean food", "spring roll", "egg rolls", "gimbap", "kung pao chicken", "Cha siu bao", "Kibbeh", "Tom kha gai", "Katsudon", "Teriyaki", "Shio ramen", "shoyu ramen", "Tonkotsu ramen", "korma", "Sigara böreği", "samosas", "naan", "Japanese gyoza", "nasi goreng", "green tea dessert", "taro boba tea", "Tikka", "dim sum china", "ramen authentic", "Guotie", "Ebi furai", "Temaki", "Hotteok", "Penang laksa", "Tangbao", "gui kbbq", "matcha donuts", "pork belly dish", "food asian bon appetit", "food asian nyt", "burger nyc", "shake shake burger", "in and out burger", "best fish tacos", "los tacos no 1 nyc photo", "mouth watering tacos", "chicken nuggets gourmet", "best oatmeal", "best dishes to make for lunch", "fried chicken best", "fried chicken in Korea", "the source Wolfgang dim sum food", "monofuku ramen", "best Mexican street food"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  let x = options;

  request(x, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('🤤');
      msg.react('😐');
      msg.react('🤢');
    }).catch();
  })

}

function vimage(message){

  var terms = ["vegan food", "vegan", "best vegan food", "vegetarian food", "baklava", "asian vegan", "vegan dinner", "vegan pesto dish", "vegan meat like dish", "vegan salad dish", "vegan sandwich dish", "Vegetable Biryani", "vegan alfredo", "Whole Roasted Cauliflower with Zaatar Spice and Tahini Sauce"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('🤤')
      msg.react('😐');
      msg.react('🤢');
    }).catch();
  })

}

function pimage(message){

  var terms = ["pizza", "pizza japan", "hot dogs", "pizzas", "bbq pizza", "flatbread pizza", "deepcrust pizza", "italian pizza", "pizza nyc", "dominos pizza", "hawaiian pizza", "pepperoni pizza", "otto pizza", "flatbread pizza", "potato pizza", "best pizza", "pineapple pizza", "mushroom pizza", "California style pizza", "st Louis style pizza", "greek pizza", "best pizza toppings", "pizza ca", "Margherita Pizza", "Thai pizza", "Creole Shrimp Pizza", "Deep-Dish Sausage Pizza", "best mushroom pizza", "best pineapple pizza", "Lehmejun", "Taco Pizza Squares", "Italian-Style Pizzas", "Santa Fe Chicken Pizza Pie", "Speedy Hummus Pizza", "Shakshuka Breakfast Pizza", "Meaty Arugula Pizzas", "Buffalo Chicken Pizza", "Spinach and Artichoke Pizza", "Big Kahuna Pizza", "Meatball Flatbread", "Chicago-Style Deep-Dish Pizza", "Reuben Pizza", "Brat & Bacon Appetizer Pizza", "Fast Philly Cheesesteak Pizza", "Chicken Caesar Pizza", "Mini Mediterranean Pizza"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  request(options, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('🤤')
      msg.react('😐');
      msg.react('🤢');
    }).catch();
  })

}

function mimage(message) {
  var terms = ["meat", "carne asada", "steak", "bacon", "pork", "bbq", "chinese bbq", "lamb dish", "meat dish", "duck dish", "wagyu beef", "wagyu beef dish", "korea bbq", "Char siu", "chashu", "filet mignon", "a5 beef"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  let x = options;

  request(x, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('🤤')
      msg.react('😐');
      msg.react('🤢');
    }).catch();
  })
}

function dimage(message) {
  var terms = ["dessert", "ben and jerrys", "dessert asian", "japanese dessert", "ice cream", "cake", "cookies", "pie", "chocolate cake", "best desserts", "healthy desserts", "brownies", "dessert italian", "french dessert", "ice cream nyc", "donuts", "donuts nyc", "apple pie", "vanilla ice cream", "Carmel flan", "Rhubarb Crisp", "Peach Cobbler", "Chocolate Chip Blondies", "Strawberry Shortcake", "Classic Chocolate Cake", "Coconut Macaroons", "Meringue Cookies", "hot milk cake", "cheesecake", "ginger cookies", "French silk pie", "baked Alaska", "peach pie", "rice pudding", "strawberry pie", "apple crisp", "buttercake", "che dessert", "mochi", "halo halo dessert", "vietnamese Coffee popsicles", "mango float dessert", "chinese coconut buns", "egg tarts"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  let x = options;

  request(x, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('🤤')
      msg.react('😐');
      msg.react('🤢');
    }).catch();
  })
}


function anime(message) {
  var terms = ["levi", "eren", "armin", "mikasa", "kenny aot", "demon slayer characters", "haikyuu best", "haikyuu other teams", "nekoma haikyuu", "boruto", "pokemon", "pikachu", "Tobio Kageyama", "Yū Nishinoya", "sword art online", "kirito", "asuna", "DXD anime", "assisinations classroom", "your lie in april", "titan aot", "all might mha", "hokage", "akatsuki clan", "pain naruto", "akatsuki naruto", "aot", "manuver gear", "attack on titan", "riener aot", "marco aot", "naruto", "demon slayer", "tanjiro", "zenitsu", "kimi no wa", "haikyuu", "anime memes", "demon slayer anime", "gang gang anime", "best anime 2020", "anime that made me cry", "action anime", "pika go pew pew", "pikachu meme", "my hero academia", "deku", "hunter x hunter", "one piece", "one punch man", "bakugo", "hinita", "hinata haikyuu", "death note", "black clover", "sheild hero", "anime op mc", "jojo bizar", "potato girl aot", "yuno black clover", "asta", "melodias", "food wars", "gintama", "Fullmetal Alchemist: Brotherhood", "fate stay anime", "Cowboy Bebop", "Shigatsu wa Kimi no Uso", "haikyuu season 2", "Vinland Saga", "Violet Evergarden", "Howl no Ugoku Shiro", "Ookami Kodomo no Ame to Yuki", "Horimiya", "Fate Zero 2nd Season", "One Punch Man", "Aria the Origination", "one piece main", "Mob Psycho 100", "Tenki no Ko", "banana fish", "dr stone anime", "No Game No Life", "Akira anime", "hange Zoe aot", "Erwin smith aot", "jean Kirsten", "Marco bodt aot", "eld gin aot", "historia aot", "best moments aot", "Kenma haikyuu", "bokuto haikyuu", "miya brothers haikyuu", "Inosuke Hashibira demon slayer", "Nezuko Kamado", "Zenitsu Agatsuma", "zenitsu op moments", "Sakonji Urokodaki", "Muzan Kibutsuji", "demons from demon slayer", "Hotaru Haganezuka demon slayer", "kakashi hatake naruto", "sasuke naruto", "sakura naruto", "might guy naruto", "chunin exams naruto", "tokyo ghoul", "ken kaneki", "Amon Tokyo ghoul", "mado Tokyo ghoul", "silent voice", "best anime", "best anime movies", "My Neighbor Totoro", "Studio Ghibli", "aesthetic anime", "violet evergarden anime", "anime scenery", "anime scenery attack on titan", "aestetic anime scenery", "your name sky", "naruto fights", "kenny! levi", "anime villans", "generic anime character", "5 cm per second", "anime where the boy goes op mode", "unlimited balance anime", "psycho pass anime", "dororo anime", "mob psycho anime", "stars align anime", "anime lofi aesthetic", "anime profile pictures", "webtoon characters", "unordinary webtoon", "sweet home webtoon"];

  var term = terms[Math.floor(Math.random() * terms.length)];

  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + term,
    method: "GET",
    headers: {
      "Accept": "text/html",
      "User-Agent": "Chrome"
    }
  };

  let x = options;

  request(x, function(error, response, responseBody) {
    if (error) {
      return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    console.log(urls);
    if (!urls.length) {
      return;
    }
    //message.channel.send(urls[0]);
    //message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    message.channel.send(urls[Math.floor(Math.random() * urls.length)]).then(msg=> {
      msg.react('😳')
      msg.react('😐');
      msg.react('😒');
      msg.react('🥴');
    }).catch();
  })
}

client.login(*removed for safety purposes*);
