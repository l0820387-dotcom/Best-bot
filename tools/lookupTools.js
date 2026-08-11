/**
 * DNS & IP Lookup Utilities using Node DNS Module
 */
const dns = require('dns').promises;

class LookupTools {
  static async resolveDns(domain) {
    const results = {};
    try { results.A = await dns.resolve4(domain); } catch (e) {}
    try { results.AAAA = await dns.resolve6(domain); } catch (e) {}
    try { results.MX = await dns.resolveMx(domain); } catch (e) {}
    try { results.TXT = await dns.resolveTxt(domain); } catch (e) {}
    try { results.NS = await dns.resolveNs(domain); } catch (e) {}
    return results;
  }
}

module.exports = LookupTools;
