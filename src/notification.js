const path = require('path')

const config = {
  title: 'BTC Alert',
  body: 'BTC just beat your target price!',
}

/**
 * The trigger by which we decide if we notify or not
 */
const shouldNotify = (target, price) => target && target < price

/**
 * Pretty much a bare minimum of notifications
 */
const showNotification = () => new window.Notification(config.title, config)

/**
 * Triggering the notification in a neat little function.
 */
exports.notify = (opts, window) =>
 shouldNotify(opts.target, opts.price) && showNotification(window)