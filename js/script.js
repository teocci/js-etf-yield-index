// Function to find the minimum amount to buy
function findMinimum(arr, n, k) {
    let res = 0

    for (let i = 0; i < n; i++) {
        res += arr[i];

        // And take k candies for free
        // from the last
        n = n - k;
    }
    return res;
}

// Function to find the maximum amount to buy
function findMaximum(arr, n, k) {
    let res = 0,
        index = 0;

    for (let i = n - 1; i >= index; i--) {
        // Buy candy with maximum amount
        res += arr[i];

        // And get k candies for free from
        // the starting
        index += k;
    }
    return res;
}

function minCost(etfs, i, prev, shares) {
    if (shares === n + 1) return 0

    if (i === n + 1) return max

    let ans = dp[i][prev][shares]
    if (ans !== -1) return ans

    let etf = etfs[i]
    ans = minCost(i+1, prev, count, etf)

    const cost = calculateRevenue(etf) 

    if (etf > etfs[prev]) {
        ans = min(ans, cost + minCost(etfs, i + 1, i, shares + 1))
    }

    return ans
}

function calculateRevenue(etf) {
    return etf.price * (etf.yield - etf.ter)
}

// Driver code
const etfs = [
    {
        name: "TIGER 부동산인프라고배당",
        code: "329200",
        price: 38975,
        yield: 0.0387,
        ter: 0.0025
    },
    {
        name: "TIGER KIS부동산인프라채권TR",
        code: "341850",
        price: 5770,
        yield: 0.0387,
        ter: 0.0025
    },
    {
        name: "KODEX 미국S&P고배당커버드콜(합성 H)",
        code: "276970",
        price: 10440,
        yield: 0.0597,
        ter: 0.0198,
    },
    {
        name: "KOSEF 고배당",
        code: "104530",
        price: 9870,
        yield: 0.054,
        ter: 0.0045,
    },
    {
        name: "ARIRANG 고배당주",
        code: "161510",
        price: 12630,
        yield: 0.0443,
        ter: 0.0029
    },
    {
        name: "HANARO 고배당",
        code: "322410",
        price: 11410,
        yield: 0.0353,
        ter: 0.0032,
    },
    {
        name: "KBSTAR 고배당",
        code: "266160",
        price: 12735,
        yield: 0.0346,
        ter: 0.0026,
    },
    {
        name: "KBSTAR 200고배당커버드콜ATM",
        code: "290080",
        price: 8075,
        yield: 0.0305,
        ter: 0.0047,
    },
    {
        name: "TIGER 국채3년",
        code: "114820",
        price: 108875,
        yield: 0.0096,
        ter: 0.0017,
    },
    {
        name: "TIGER 미국MSCI리츠(합성 H)",
        code: "182480",
        price: 16375,
        yield: 0.0252,
        ter: 0.0032,
    },
    {
        name: "TIGER 은행",
        code: "091220",
        price: 7925,
        yield: 0.0322,
        ter: 0.0046,
    },
]

const annualGoal = 100000
let n = etfs.length
let k = 2

etfs.sort((a, b) => {
    return calculateRevenue(a) - calculateRevenue(b)
})

function minByGoal(etf, annualGoal) {
    const revenue = calculateRevenue(etf)
    return Math.ceil(annualGoal / revenue)
}

window.onload = () => {
    // document.write(`${findMinimum(etfs, n, k)} ${findMaximum(etfs, n, k)}`)
    etfs.forEach((etf, i) => {
        const shares = minByGoal(etf, annualGoal)
        console.log({ etf, shares })
    })
}
