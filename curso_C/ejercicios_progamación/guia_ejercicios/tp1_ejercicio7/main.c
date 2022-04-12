#include "header.h"
int main()
{
    int numero = 6;
    int acum;
    acum = sumar_divisores(numero);

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

    return 0;
}
