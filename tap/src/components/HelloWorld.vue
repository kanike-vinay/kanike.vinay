<template>
    <v-container grid-list-xl>
        <v-flex xs12 offset-xs0>
            <v-card class="rounded-card">
                <v-form>
                    <v-container fluid px-1>
                        <v-layout row wrap>

                            <v-flex xs12 sm6 md8>
                                <v-text-field class="text-md-right" label="Recruitment Project Name*"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Technical Manager* / Senior Manager*"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md2>
                                <v-text-field label="Demand Id#*"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md2>
                                <v-text-field label="RR#*"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md2>
                                <v-text-field label="Positions#*"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md2>
                                <v-text-field label="Project Name"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md2>
                                <v-radio-group v-model="interview">
                                    <v-radio class="text-md-right" :label="'Walk-In Interviews or Weekend Drive Scheduled Inteviews'" :value="0" :key="0"></v-radio>
                                </v-radio-group>
                            </v-flex>

                            <v-flex xs12 sm6 md2>
                                <v-text-field label="TAT Team PoC*"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <div class="text-xs-center">
                        <v-btn flat class="outlined">
                            Save
                        </v-btn>
                    </div>
                </v-form>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        interview: 0
      }
    }
  }
</script>

<style>
label {
  text-align-last: right;
  font-weight: 1000;
}

.rounded-card{
    border-radius:15px;
}

.v-btn.outlined {
                  border: 1px solid ;
                  border-radius:15px;
                  height: 30px;
                  width:  30px;
}
</style>