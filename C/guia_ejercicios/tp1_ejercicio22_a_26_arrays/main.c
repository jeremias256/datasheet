#include "header.h"

int main()
{

    int vec[20] = {23,56,98,76,1,9,18,88,65,2};

    ordernar_por_insercion(vec,10);
    printf("Array antes de insertar valor: \n");
    mostrar_vector(vec,10);

    printf("\nArray Despues de insertar valor: \n");

    insertar(vec,10,22);
    mostrar_vector(vec,11);

    insertar(vec,11,22);
    mostrar_vector(vec,12);

    insertar(vec,12,22);
    mostrar_vector(vec,13);

    return 0;
}

