import cheerio from "cheerio";
import newspapers from "./newspaperArray.js";
import axios from "axios";

const pathsResult ={
    home: (req,res)=>{
        res.json("home")
    },
    allNewspaper: (req,res)=>{
        var articles = [];
        newspapers.forEach(newspaper=>{
            
            axios.get(newspaper.address)
                .then(response=>{
                    const html = response.data;
                    const $ = cheerio.load(html);

                    $('a:contains("climate")', html).each(
                        function(){
                            const title = $(this).text();
                            const url = $(this).attr('href');
                        articles.push({
                            title,
                            url:newspaper.base+url,
                            source :newspaper.name 
                        })
                        
                        })
                        
                        res.json(articles)     
                })
                
        })
        
    },
    spacificNewspaper: (req,res)=>{
        const specificNewsPaper = newspapers.filter(newspaper => newspaper.name == req.params.newspaperID)[0];
        var specificArticle=[];
        axios.get(specificNewsPaper.address)
            .then(response =>{
                const html = response.data;
                const $ = cheerio.load(html);

            $('a:contains("climate")', html).each(function(){
                const title = $(this).text();
                const url = $(this).attr('href');
            specificArticle.push({
                source:specificArticle.name,
               title,
                url
            })
                        
            })
            res.send(specificArticle);
            })

        
        
    }
}

export default pathsResult