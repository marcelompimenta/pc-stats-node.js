const os = require('os')
const log = require('./logger')

const { freemem, totalmem } = os

setInterval(() => {

    console.clear()

    const total = parseInt(totalmem / 1024 / 1024)
    const mem = parseInt(freemem / 1024 / 1024)
    const percents = parseInt(mem / total * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} GB`,
        usage: `${percents} %`
    }
    console.log("======= PC STATS ======")
    console.table(stats)

    log(JSON.stringify(stats))

}, 1000)

