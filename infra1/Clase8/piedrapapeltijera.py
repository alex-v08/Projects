#encoding:UTF-8
import random



opciones=["Piedra","Papel","Tijera","Lagarto","Spock"]



def menu():
    print("1. Jugar")
    print("2. Salir")
    opcion=int(input("Ingrese una opción: "))
    return opcion

def jugar():
    print("Jugar")
    print("1. Piedra")
    print("2. Papel")
    print("3. Tijera")
    print("4. Lagarto")
    print("5. Spock")
    opcion=int(input("Ingrese una opción: "))
    return opcion

def computadora():
    return random.randint(1,5)

def partida():
    print("Partida")
    opcion=jugar()
    opcionPC=computadora()
    print("Computadora: ",opciones[opcionPC-1])
    print("Usuario: ",opciones[opcion-1])
    if opcion==opcionPC:
        print("Empate")
    elif opcion==1 and opcionPC==3:
        print("Gana Usuario")
    elif opcion==1 and opcionPC==4:
        print("Gana Usuario")
    elif opcion==2 and opcionPC==1:
        print("Gana Usuario")
    elif opcion==2 and opcionPC==5:
        print("Gana Usuario")
    elif opcion==3 and opcionPC==2:
        print("Gana Usuario")
    elif opcion==3 and opcionPC==4:
        print("Gana Usuario")
    elif opcion==4 and opcionPC==2:
        print("Gana Usuario")
    elif opcion==4 and opcionPC==5:
        print("Gana Usuario")
    elif opcion==5 and opcionPC==1:
        print("Gana Usuario")
    elif opcion==5 and opcionPC==3:
        print("Gana Usuario")
    else:
        print("Gana Computadora")
        

def main():
    opcion=menu()
    while opcion!=2:
        if opcion==1:
            partida()
        opcion=menu()
    print("Fin del programa")
    
main()



