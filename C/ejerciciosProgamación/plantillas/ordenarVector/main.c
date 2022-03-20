#include <stdio.h>
#include <stdlib.h>
void mostrarVector (int []);
void intercambio(int*, int*);

void ordernarporburbujeo(int, int []);

void ordernarburbujeomejorado (int,int []);

int main()
{
    int vec[]={7,26,8,15,9};
    int i;

    printf("Vector desordenado\n");
    for(i=0;i<5;i++)
    {
        printf("Posicion %d \n",vec[i]);
    }

    //ordernarPorBurbujeo(6,vec);

    //ordernarBurbujeoMejorado(6,vec);

    ordenarBurbujeoMejoradosDos(6,vec);

    mostrarVector(vec);
    return 0;
}

void ordenarBurbujeoMejoradosDos (int n, int a[])
{
    int cota,j,k;
    cota=n;
    k=1;
    while(k!=0)
    {
        k=0;
        for(j=1;j<cota;j++)
        {
            if(a[j-1]>a[j])
            {
                intercambio(&a[j-1],&a[j]);
                k=j;
            }
        }
        cota=k;
    }
}

void ordernarPorBurbujeo (int n,int a[])
{
    int i,j,aux;
    for(i=0;i<n-i;i++) //pasadas
    {
        for(j=1;j<n-i;j++) //comparaciones
        {
            if(a[j-1]>a[j])
            {
                aux=a[j];
                a[j]=a[j-1];
                a[j-1]=aux;
            }
        }
    }
}

void ordernarBurbujeoMejorado (int n, int a[])//interrumpe si no hay cambios
{
    int i,j,huboCambio;
    i=0;
    do{
        huboCambio=1; //bandera que indica cambios
        for(j=1;j<n-i;j++)
        {
            if(a[j-1]>a[j])
            {
                intercambio(&a[j-1],&a[j]);
                huboCambio=0;
            }
            i=i+1;
        }
    }while(huboCambio==0);
}

void mostrarVector(int a[])
{
    int i;
    printf("\nVector ordenado \n");
    for(i=0;i<5;i++)
    {
        printf("Posicion %d \n",a[i]);
    }
}

void intercambio(int *a, int *b)
{
    int aux;
    aux=*a;
    *a=*b;
    *b=aux;
}
