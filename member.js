function skillsMember(){
    return {
        restrict: "E",
        controller: "SkillsMemberCOntroller",
        controllerAs: "vm",
        bindToController: true,
        scope: {
            member: "="
        }
    }
}