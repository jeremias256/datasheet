#include <stdio.h>
#include <stdlib.h>
#define TAM 6

//void mostrarVector(int vec[],int t)
void mostrarVector(int *p,int t)
{
    for(int i=0;i<t;++i)
    {
        printf("%d\n",*p);
        p++;
    }
}

int main()
{
    int vec[TAM]={0};
    vec[0]=1;
    vec[4]=8;
    mostrarVector(vec,TAM);

    return 0;
}
