const facts = [
    {text: "fact 1"},
    {text: "fact 2"},
    {text: "fact 3"},
    {text: "fact 4"},
    {text: "fact 5"},
]

const getFacts = () => {
    return Promise.resolve(facts)
  }
  
  export default { getFacts }