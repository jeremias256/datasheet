#include <stdio.h>
#include <stdlib.h>

int main()
{

    int numero = 50;
    int *pNumero;

    printf("Dato: %d\n",numero); //imprime 50
    printf("Posicion: %p\n",&numero); //imprime pos memoria

    printf("**************\n**************\n");

    pNumero= &numero; //&numero es la posicion en memoria de numero
    printf("Valor de la variable:\n");
    printf("Dato: %i\n",numero);
    printf("Dato: %i\n",*pNumero);

    printf("**************\n**************\n");

    printf("Posicion de memoria:\n");
    printf("Posicion: %p\n",&numero);
    printf("Posicion: %p\n",pNumero);

    return 0;
}
