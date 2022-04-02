int combinatorio (int m,int n)
{
    int res1,res2;
    if(m>=n&&n>=0)
    {
        res1 = factorial(m);
        res2 = factorial(n)*factorial(m-n);
        return res1/ res2;
    }
    else
        return 0;
}

int factorial (int n)
{
    int res ;
    if(n>0)
    {
        res = n * factorial(n-1);
        return res;
    }
    else
        return 1;

}
