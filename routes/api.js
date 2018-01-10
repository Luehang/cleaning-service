const express               = require('express');
const router                = express.Router();
const sgMail                = require('@sendgrid/mail');

/**
 * POST /api/quote
 *
 * Quote submit API endpoint.
 */
router.route('/get-quote')
  .post((req, res, next) => {
      if (req.body.first_name == "") {
        return res.status(400).send({
          success: false,
          message: "First name needs to be filled out."
        });
      }
      if (validateEmail(req.body.email) === false) {
        return res.status(400).send({
          success: false,
          message: "Invalid E-mail Address. Please try again."
        });
      }
      next();
    }, (req, res) => {
      const { first_name, last_name, email, phone_number, company,
        city, state, comments } = req.body;
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
          to: process.env.SENDGRID_TO_EMAIL,
          from: email,
          subject: "Requesting Quote",
          // text: '',
          html: `<table style="background:#fafafa;width:100%;">
                    <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center;">
                  <td class="x_center" align="center" valign="top" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <center style="width:100%; min-width:580px">
                  <table class="x_row x_header" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%;">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_center" align="center" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <center style="width:100%; min-width:580px">
                  <table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
                  <table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <div class="x_mark" style="text-align:center"><a href="${process.env.APP_URL}" target="_blank" style="text-align:center; color:#4183C4; text-decoration:none"><div style="display: inline-block; max-width: 99.9%;"><img src="http://www.iconsdb.com/icons/preview/caribbean-blue/infinity-xxl.png" alt="${process.env.APP_NAME}, Inc." width="102" height="28" class="x_center x_logo-wordmark" style="outline:none; text-decoration:none; width:auto; max-width:100%; border:none; margin:0 auto; float:none; padding:25px 0 17px; text-align:center"></div> </a></div>
                  </td>
                  <td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </center>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  <table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center; border:1px solid #dddddd; border-radius:3px; background:#fff;">
                  <td style="word-break:break-word; padding:10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <table class="x_row" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%; display:block">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
                  <table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_no-padding" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <div class="x_hero-image-wrap" style="overflow:hidden; border-radius:3px 3px 0 0">
                  <a href="${process.env.APP_URL}" target="_blank" style="color:#4183C4; text-decoration:none"><div style="display: inline-block; max-width: 99.9%;"><img src="https://www.climbhangar18.com/wp-content/uploads/2016/07/mail.png" alt="${process.env.APP_NAME}" border="0" class="x_hero-image" style="margin:0; padding:0; outline:none; text-decoration:none; height:200px; max-width:100%; border:none; display:block"></div> </a></div>
                  </td>
                  <td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  <div class="x_panel" style="background:#ffffff; background-color:#ffffff;padding:0 20px 20px;width:538px">
                  <table class="x_twelve x_columns x_panel-contents" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:540px">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <div class="x_content">
                  <h2 class="x_content-heading" style="color:#333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:300; padding:0; margin:25px 0 20px; text-align:center; line-height:1; word-break:normal; font-size:22px">
                  ${first_name} is requesting a quote or message.</h2>
                  <p>Name: ${first_name} ${last_name}</p>
                  <p>Email: ${email}</p>
                  <p>Phone: ${phone_number}</p>
                  <p>Company: ${company}</p>
                  <p>City-State: ${city} ${state}</p>
                  <p>Message: ${comments}</p>
                  <div class="x_cta-button-wrap" style="padding:30px 0 20px; text-align:center; color:#ffffff">
                  <a href="${process.env.APP_URL}" target="_blank" style="color:#ffffff; text-decoration:none; display:inline-block; text-align:center; background:#23b5f7; background-color:#23b5f7; border-radius:5px; -webkit-border-radius:5px; padding:12px 44px; font-weight:bold; letter-spacing:normal; font-size:17px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; margin:0 auto; width:auto!important">Go to Site</a></div>
                  </div>
                  </td>
                  <td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  <table class="x_row x_layout-footer" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_center" align="center" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <center style="width:100%; min-width:580px">
                  <table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
                  <table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
                  <tbody>
                  <tr style="padding:0; vertical-align:top; text-align:center">
                  <td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
                  <div class="x_footer-links" style="padding:20px 0; text-align:center">
                  <p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
                  <a href="#" target="_blank" style="color:#2d99bb; text-decoration:none">Unsubscribe</a></p>
                  <p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
                  <a href="#" target="_blank" style="color:#2d99bb; text-decoration:none">Terms</a> • <a href="#" target="_blank" style="color:#2d99bb; text-decoration:none">Privacy</a></p>
                  </div>
                  <div class="x_content" style="margin:0 0 15px 0"><a href="#" target="_blank" style="color:#4183C4; text-decoration:none"><div style="display: inline-block; max-width: 99.9%;"><img src="https://ih1.redbubble.net/image.197984217.2529/ap,550x550,12x12,1,transparent,t.u2.png" class="x_logo-invertocat" width="40" height="38" style="outline:none; text-decoration:none; width:auto; max-width:100%; border:none"></div> </a></div>
                  <div class="x_content" style="margin:0 0 15px 0">
                  <p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
                  ${process.env.APP_NAME}, Inc.</p>
                  <p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
                  ${process.env.APP_URL}<span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_5621_5651"></span><br><span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_5621_5651">
                  United States</span></p>
                  </div>
                  </td>
                  <td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </center>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </center>
                  </td>
                  </tr>
                  </tbody>
                  </table>`
      };
      sgMail.send(msg).then(() => {
          return res.status(201).json({
              success: true,
              message: "Message sent successfully."
          });
      }).catch(error => {
          if(error.code === 400) {
              return res.status(400).json({
                  success: false,
                  message: "Invalid E-mail. Please try again."
              });
          }
          return res.status(400).send({
              success: false,
              message: error.message
          });
      });
    }
  )

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

module.exports = router;
