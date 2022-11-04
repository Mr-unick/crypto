
       
      
      document.getElementById('btn').addEventListener('click', (e) => {
        e.preventDefault();
        const data = document.getElementById('form').value;
       
       fetchfunction(data)
      })
    
      fetchfunction = async(data)=>{
         const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${data}?currency=inr`)
         console.log(r.data.coin)
      document.getElementById('box2').innerHTML =`
     <div class='box3'> <img src='${r.data.coin.icon}' alt=logo width='25'><h2>${r.data.coin.name}</h2>
      </div>
      <table class="table" >
              
                <tbody>
                   
                    <tr>
               
                <td >Rank</td>
                <td >${r.data.coin.rank}</td>
               
            </tr>
                    <tr>
                      
                        <td>Price</td>
                        <td>${r.data.coin.price}</td>
                       
                    </tr>
                    <tr>
                       
                        <td >Total Supply</td>
                        <td >${r.data.coin.totalSupply}</td>
                       
                    </tr>
                    <tr>
                       
                        <td >Market cap</td>
                        <td >${r.data.coin.marketCap}</td>
                       
                    </tr>
                    <tr>
                       
                        <td >Price Chage</td>
                        <td >${r.data.coin.priceChange1h}</td>
                       
                    </tr>
                    <tr>
                  
                    <td >Volume</td>
                    <td >${r.data.coin.volume}</td>
                   
                </tr>
                
                </tbody>
            </table>
      
      `
      }
    