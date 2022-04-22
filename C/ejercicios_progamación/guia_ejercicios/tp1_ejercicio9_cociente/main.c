#include "header.h"

int main()
{
    int a=1000,b,cociente;

    do
    {
        printf("Ingrese valor de b distinto a 0 :\n");
        scanf("%d",&b);
    }while(b == 0);

    cociente=funcion_cociente(a,b);

    printf("Resultado del cociente es de : %d",cociente);

    return 0;
}
