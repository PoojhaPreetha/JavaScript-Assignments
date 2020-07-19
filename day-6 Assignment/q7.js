let p = Number(prompt("Enter value"));
function prime(p)
{
    var t  = [], i, j, primes = [];
    for (i = 2; i <= p; ++i) 
    {
        if (!t [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= p; j += i) 
            {
                t[j] = true;
            }
        }
    }
    return primes;
}

console.log(prime(p));
