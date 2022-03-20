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
