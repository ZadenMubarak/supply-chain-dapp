from moralis import sol_api

api_key = "ycFHd25hwPsB2TfwuscTBSOWuZeNfchAei34SJaHZO9U7XSRBmytnJMhmw7vtwqi"
params = {
    "address": "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen", 
    "network": "mainnet", 
}

result = sol_api.account.get_portfolio(
    api_key=api_key,
    params=params,
)

print(result)