#include <stdio.h>
#include <stdlib.h>

int main()
{

    int numero = 3;
    printf("%d \n",numero); //imprime 3
    printf("%p \n",&numero);// posición memoria 000000000061FE1C

    int aux = 100;
    int *puntero = &aux;

    printf("%d\n",aux);
    printf("%p\n",&puntero);

    return 0;
}
