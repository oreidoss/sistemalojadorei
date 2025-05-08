@echo off
echo Instalando pacotes necessários...

:: Verifica se o pip está instalado
python -m ensurepip --upgrade

:: Instala as dependências
pip install tk
pip install pyodbc
pip install pillow
pip install requests
pip install openpyxl
pip install pandas
pip install tkcalendar
pip install reportlab
pip install matplotlib  
pip install numpy        
pip install xlrd          
pip install scipy         
pip install seaborn       
pip install xlwings 

pip install tk
pip install pyodbc
pip install pillow
pip install requests
pip install openpyxl
pip install pandas
pip install tkcalendar
pip install reportlab
pip install matplotlib       

echo Pacotes instalados com sucesso!
pause
