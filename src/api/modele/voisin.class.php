<?php
    class Voisin{
        private string $id_vosin;
        private string $nom;
        private string $prenom;
        private int $perimetre;
        private string $tel;
        private string $adresse;
        private int $credits;
        private string $login;
        private string $mdp;
        private string $email;
        private bool $archive;
        private bool $valide;

        function __construct(string $id_voisin = "", string $nom = "", string $prenom = "", int $perimetre = 0, string $telephone = "", string $adresse = "", int $credits = 20, string $login = "", string $mdp = "", string $email = "", bool $archive = false, bool $valide = false){
            $this->id_voisin = $id_voisin;
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->perimetre = $perimetre;
            $this->tel = $telephone;
            $this->adresse = $adresse;
            $this->credits = $credits;
            $this->login = $login;
            $this->mdp = $mdp;
            $this->email = $email;
            $this->archive = $archive;
            $this->valide = $valide;
        }

        public function getId_voisin(): string{
            return $this->id_vosin;
        }

        public function setId_voisin(string $id): void{
            $this->id_voisin = $id;
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

        public function getPerimetre(): int{
            return $this->perimetre;
        }

        public function setPerimetre(int $peri): void{
            $this->perimetre = $peri;
        }

        public function getTel(): string{
            return $this->tel;
        }

        public function setTel(string $tel): void{
            $this->tel = $tel;
        }

        public function getAdresse(): string{
            return $this->adresse;
        }

        public function setAdresse(string $adr): void{
            $this->adresse = $adr;
        }

        public function getCredits(): int{
            return $this->credits;
        }

        public function setCredits(int $nb): void{
            $this->credits = $nb;
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

        public function getEmail(): string{
            return $this->email;
        }

        public function setEmail(string $email): void{
            $this->email = $email;
        }

        public function getArchive(): bool{
            return $this->archive;
        }

        public function setArchive(bool $archive): void{
            $this->archive = $archive;
        }

        public function getValide(): bool{
            return $this->valide;
        }

        public function setValide(bool $id): void{
            $this->valide = $valide;
        }
    }
?>