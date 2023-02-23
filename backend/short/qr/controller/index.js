const QRCode = require("qrcode");

const qrImgGenerator = async (req, res) => {
  var option = {
    color: {
      dark: "#000000",
      light: "#0000", // background color
    },
    width: 300,
    margin: 2,
    scale: 10,
  };
  let img = "";
  let qr = await QRCode.toDataURL("https://anhit.name.vn", option);
  img = `<image src= " ` + qr + `" />`;
  return res.send(img);
};

module.exports = { qrImgGenerator };
