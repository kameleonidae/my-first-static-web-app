<?php
    class Voisin{
        private string $id_admin;
        private string $login;
        private string $mdp;
        private string $nom;
        private string $prenom;
        private string $email;
        private string $tel;

        function __construct(string $id_admin = "", string $login = "", string $mdp = "", string $nom = "", string $prenom = "", string $email = "", string $telephone = ""){
            $this->id_admin = $id_admin;
            $this->login = $login;
            $this->mdp = $mdp;
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->email = $email;
            $this->tel = $telephone;
        }

        public function getId_admin(): string{
            return $this->id_admin;
        }

        public function setId_admin(string $id): void{
            $this->id_admin = $id;
        }

        public function getLogin(): string{
            return $this->login;
        }

        public function setLogin(string $login): void{
            $this->login = $login;
        }

        public function getMdp(): string{
            return $this->mdp;
        }

        public function setMdp(string $mdp): void{
            $this->mdp = $mdp;
        }

        public function getNom(): string{
            return $this->nom;
        }

        public function setNom(string $nom): void{
            $this->nom = $nom;
        }

        public function getPrenom(): string{
            return $this->prenom;
        }

        public function setPrenom(string $prenom): void{
            $this->prenom = $prenom;
        }

        public function getEmail(): string{
            return $this->email;
        }

        public function setEmail(string $email): void{
            $this->email = $email;
        }

        public function getTel(): string{
            return $this->tel;
        }

        public function setTel(string $tel): void{
            $this->tel = $tel;
        }
    }
?>