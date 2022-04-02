#include <stdio.h>
#include <stdlib.h>
void f1(int);
void modificar(int*);

void f1(int x)
{
    x=7;
}
void modificar(int* y)
{
    *y = 9;
}
int main()
{
    int x;
    x=5;

    printf("%d\n",x);
    f1(x);
    printf("%d\n",x);
    modificar(&x);
    printf("%d\n",x);
    return 0;
}
