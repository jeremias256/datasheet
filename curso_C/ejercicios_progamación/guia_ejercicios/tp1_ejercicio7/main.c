#include "header.h"

int main()
{
    int numero = 6 bv,i;
    int acum = 0;

    for(i=1; i<=numero/2; i++)
    {
        (numero%i==0 ? acum+=i : "");
    }
    printf("Resultado de la suma de los divisores %d: ",acum);

    if(acum==numero)
    {
        printf("Perfecto");
    }
    else if(acum>numero)
    {
        printf("Abuntante");
    }
    else
        printf("Deficiente");
}
