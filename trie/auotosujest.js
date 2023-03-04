class TrieNode {
    constructor() {
      this.children = {};
      this.endOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.endOfWord = true;
    }
  
    autoSuggest(prefix) {
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!current.children[char]) {
          return [];
        }
        current = current.children[char];
      }
  
      const results = [];
      const traverse = (node, word) => {
        if (node.endOfWord) {
          results.push(word);
        }
        for (const char in node.children) {
          traverse(node.children[char], word + char);
        }
      };
      traverse(current, prefix);
      return results;
    }
  }
  
  const trie = new Trie();
  
  trie.insert("apple");
  trie.insert("apricot");
  trie.insert("banana");
  trie.insert("blueberry");
  trie.insert("cherry");
  trie.insert("coconut");
  trie.insert("peach");
  trie.insert("pear");
  trie.insert("pineapple");
  trie.insert("zeebra");
  trie.insert("zeeco");
  
  console.log(trie.autoSuggest("a")); // ["apple", "apricot"]
  console.log(trie.autoSuggest("b")); // ["banana", "blueberry"]
  console.log(trie.autoSuggest("c")); // ["cherry", "coconut"]
  console.log(trie.autoSuggest("p")); // ["peach", "pear", "pineapple"]
  console.log(trie.autoSuggest("pi")); // ["pineapple"]
  console.log(trie.autoSuggest("z")); // []
  
console.log(trie);