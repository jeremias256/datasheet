#include <stdio.h>
#include <stdlib.h>

int main()
{
    int tem,i,ingreso,max=0;

    for(i=1;i<=5;i++)
    {
        printf("Ingrese número maximo \n");
        scanf("%d",&tem);

        if((i==1) || (tem>max))
        {
            max=tem;
            ingreso=i;
        }
    }
    printf("La temperatura maxima fue :%d con la orden : %d",max,ingreso);
    getch();
}

