const nodeMailer = require('nodemailer')

const html = `
    
        <h1>Hello Word!</h1>
        <p>Isn´t NodeMailer UserFul?</p>

 `;

async function main() {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        ssl: false,
        tls: true,
        secure: true,
        auth: {
            user: 'xxxxxxxxxxx',
            pass: 'xxxxxxxxxxxxxxxx'
        }
    });

    const info = await transporter.sendMail({
        from: 'Test <xxxx',
        to: 'xxxxxxxx',
        subject: 'xxxxxxxxxxxxxxxxx',
        html: html,
    });

    console.log(" Message send: " + info.messageId);

}

main()
    .catch(e => console.log(e));



