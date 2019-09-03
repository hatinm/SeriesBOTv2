module.exports = (bot) => {
let prompt = process.openStdin()
prompt.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
        bot.channels.get("589888338350047253").send(x.join(" "));
    });
}
