const list = require("./list");

function getEmoji(emojiname) {
  var emoji = "&#";
  var emojiname = emojiname.toUpperCase();
  switch (emojiname) {
    case "GRINNING FACE":
      emoji += "128512";
      break;

    case "HAPPY":
      emoji += "128512";
      break;

    case "SAD":
      emoji += "128577";
      break;

    case "RUDE":
      emoji += "128547";
      break;

    case "ANGRY":
      emoji += "128548";
      break;

    case "CRY":
      emoji += "129319";
      break;

    case "GRINNING FACE WITH SMILING EYES":
      emoji += "128513";
      break;

    case "FACE WITH TEARS OF JOY":
      emoji += "128514";
      break;

    case "SMILING FACE WITH OPEN MOUTH":
      emoji += "128515";
      break;

    case "SMILING FACE WITH OPEN MOUTH AND SMILING EYES":
      emoji += "128516";
      break;

    case "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT":
      emoji += "128517";
      break;

    case "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES":
      emoji += "128518";
      break;

    case "SMILING FACE WITH HALO":
      emoji += "128519";
      break;

    case "SMILING FACE WITH HORNS":
      emoji += "128520";
      break;

    case "WINKING FACE":
      emoji += "128521";
      break;

    case "SMILING FACE WITH SMILING EYES":
      emoji += "128522";
      break;

    case list.emojis[0].name.toUpperCase():
      emoji += list.emojis[0].html;
      break;
    default:
      list.emojis.map(function(item) {
        if (emojiname == item.name.toUpperCase()) {
          emoji = item.html;
        }
      });
      break;
  }

  return emoji;
}
console.log(getEmoji("happy"));

module.exports = getEmoji;
