<script setup>
    import Question from "@/components/QuestionItem.vue"
    import QuizHeader from "@/components/QuizHeader.vue"
    import Results from "@/components/ResultItem.vue"
    import { ref, watch, computed } from "vue";
    import {useRoute} from "vue-router"
    import quizes from "@/data/quizes.json"

    const route = useRoute();
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id === quizId);
    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnswer = ref(0);
    // Solution 1
    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)
    // watch(() => currentQuestionIndex.value,() => {
    //     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
    // })
    
    // Solution 2 (Better!)
    const questionStatus = computed(()=>{
        return `${currentQuestionIndex.value}/${quiz.questions.length}`;
    })
    // Or just set it in 1 line like so
    // const questionStatus = computed(()=>`${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barPercentage = computed(()=>`${currentQuestionIndex.value/quiz.questions.length*100}%`)
    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswer.value++;
        }
        if(quiz.questions.length-1 === currentQuestionIndex.value){
            showResult.value = true;
        }
        currentQuestionIndex.value++;
    }
    const showResult = ref(false)
</script>

<template>
    <div>
        <QuizHeader
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question 
                v-if="!showResult"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"   
            />
            <Results 
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"
            />
        </div>
    </div>
    <div></div>
</template>

<style scoped>
   
</style>