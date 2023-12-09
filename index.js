let authorEl=document.getElementById("author")
let quoteEl=document.getElementById("quote")
let generateBtn=document.getElementById("generate_btn")


generateBtn.addEventListener("click", function(){
    let quotes={
        "― Jules Renard": '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "― Albert Einstein":'“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "― Pierce Brown":'“Man cannot be freed by the same injustice that enslaved it.”'   
    }
    let authors=Object.keys(quotes);
    let author=authors[Math.floor(Math.random()*authors.length)]
    authorEl.innerHTML=author
    let quote=quotes[author]
    quoteEl.innerHTML=quote
})
   


