import SHA1 from 'crypto-js/sha1';

export default function generate() {
  let entries = [];
  for (let i = 0; i < 10; i++) {
    let entry = {
      title: Math.floor(Math.random() * 10000).toString(),
      link: 'https://www.example.com/',
    };

    entry.key = SHA1(`${entry.title}\0${entry.link}`).toString();

    entries.push(entry);
  }

  debugger;

  return entries;
}
