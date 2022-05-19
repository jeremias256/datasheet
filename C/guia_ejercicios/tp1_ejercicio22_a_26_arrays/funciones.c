#include "header.h"

void ordernar_por_insercion(int *vec, int ce)
{
    int i,e_izq,e_der;

    for(i=1;i<ce;i++)
    {
        e_der = vec[i];
        e_izq = i-1;
        while(e_izq >=0 && e_der < vec[e_izq])
        {
            vec[e_izq+1]=vec[e_izq];
            e_izq--;
        }
        vec[e_izq+1]=e_der;
    }
}

void insertar(int *vec, int tam,int valor)
{
    int i = tam;
    while(valor<vec[i-1])
    {
        vec[i]=vec[i-1];
        i--;
    }
    vec[i]=valor;
    tam++;
}

void mostrar_vector(int *puntero, int ce)
{
    int i;
    printf("\n");
    for(i=0;i<ce;i++)
    {
        printf("[%d]",*puntero);
        puntero++;
    }
    printf("\n");
}
