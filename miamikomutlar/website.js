module.exports = {
    
    isim: "site", 
    alternatifler: ["site", "website", "web"],
     kullanımı:"site",

    çalıştır: async (client, message, args, user, text, prefix) => {
        message.channel.send({content: ":link: https://www.miamidev.xyz"});
    }
};