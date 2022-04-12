#include "header.h"

int sumadivisores(int numero)
{
    int i;
    int acum=0;

    for(i=1; i<=numero/2; i++)
    {
        (numero%i==0 ? acum+=i : "");
    }
    return acum;
}
