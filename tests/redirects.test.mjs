import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const GSC_LEGACY_PATHS = [
  "/why-the-turks-and-caicos-is-great-for-bonefishing/",
  "/bonefishing-rates/",
  "/flyfishing-in-the-turks-and-caicos/wading_for_bonefish/",
  "/flyfishing-in-the-turks-and-caicos/north-caicos/",
  "/bonefish-spawning-and-fishing-season/",
  "/bonefish-flies/",
  "/book-a-trip/",
  "/bonefishing-lodge-turks-caicos/",
  "/seasons/",
  "/last-chance/",
  "/flyfishing-in-the-turks-and-caicos/bottle-creek/",
  "/fly-fish-bonefish/",
  "/flyfishing-in-the-turks-and-caicos/",
  "/size-bonefish-can-expect-see/",
  "/diy-bonefishing/",
  "/flyfishing-in-the-turks-and-caicos/east-baysouth-cays/",
  "/offshore-fishing-in-the-turks-and-caicos/",
  "/fishing-kayaks/",
  "/bonefishing-trip/",
  "/diy-bonefishing-boat/",
  "/transport-provo/",
  "/contact-us/",
  "/accommodation/",
  "/catch-and-release-bonefish-handling/",
];

const LIVE_PAGES = new Set([
  "/",
  "/fishing/",
  "/fishing/guided-day/",
  "/fishing/bottle-creek/",
  "/fishing/east-bay/",
  "/fishing/north-caicos/",
  "/fishing/why-turks-caicos/",
  "/fishing/tides/",
  "/lodge/",
  "/diy/",
  "/diy/fishing-kayaks/",
  "/diy/guided-vs-diy/",
  "/rates/",
  "/travel/",
  "/learn/",
  "/learn/seasons/",
  "/learn/bonefish-season/",
  "/learn/bonefish-flies/",
  "/learn/catch-and-release/",
  "/learn/tackle-and-gear/",
  "/what-to-wear-bonefishing/",
  "/where-to-bonefish-turks-caicos/",
  "/book/",
  "/faq/",
  "/gallery/",
  "/reviews/",
  "/contact/",
  "/deposit/",
  "/payment-successful/",
  "/sitemap.xml",
]);

function parseRedirects() {
  const text = fs.readFileSync(path.join(process.cwd(), "public/_redirects"), "utf8");
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [source, destination, code = "302"] = line.split(/\s+/);
      return { source, destination, code };
    });
}

test("GSC legacy 404 paths have 301 rules with and without trailing slash", () => {
  const bySource = new Map(parseRedirects().map((rule) => [rule.source, rule]));

  for (const source of GSC_LEGACY_PATHS) {
    const withSlash = bySource.get(source);
    assert.ok(withSlash, `missing redirect for ${source}`);
    assert.equal(withSlash.code, "301");
    assert.ok(
      LIVE_PAGES.has(withSlash.destination.split("#")[0]),
      `${source} destination ${withSlash.destination} is not a live page`
    );

    const withoutSlash = source.slice(0, -1);
    const noSlash = bySource.get(withoutSlash);
    assert.ok(noSlash, `missing redirect for ${withoutSlash}`);
    assert.equal(noSlash.code, "301");
    assert.equal(noSlash.destination, withSlash.destination);
  }
});

test("sitemap.xml lists only live canonical URLs", () => {
  const xml = fs.readFileSync(path.join(process.cwd(), "public/sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(locs.length > 0, "sitemap is empty");

  for (const loc of locs) {
    assert.match(loc, /^https:\/\/greatbonefishing\.com\//);
    const url = new URL(loc);
    assert.equal(url.pathname === "/" || url.pathname.endsWith("/"), true, loc);
    assert.ok(LIVE_PAGES.has(url.pathname), `${loc} is not a live canonical page`);
  }
});
