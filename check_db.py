import socket
import time
import os

""" Check if port is open, avoid docker-compose race condition """
# arguments
service_name = "postgreSQL"
port = int(os.getenv("POSTGRES_PORT"))
ip = os.getenv("POSTGRES_HOST")

# Infinite loop
print("{0} port {1} is not open for host {2}".format(service_name, port, ip))

# while True:
#     sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#     result = sock.connect_ex((ip, port))
#     if result == 0:
#         print("{0} port is open! Bye!".format(service_name))
#         break
#     else:
#         print("{0} port is not open! I'll check it soon!".format(service_name))
#         time.sleep(3)